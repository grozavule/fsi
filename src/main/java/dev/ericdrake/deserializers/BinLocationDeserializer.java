package dev.ericdrake.deserializers;

import com.fasterxml.jackson.core.JacksonException;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.ObjectCodec;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;
import dev.ericdrake.entities.BinLocation;
import dev.ericdrake.repositories.BinLocationRepository;

import java.io.IOException;
import java.util.Optional;

public class BinLocationDeserializer extends StdDeserializer<BinLocation> {
    private final BinLocationRepository binLocationRepository;

    public BinLocationDeserializer(BinLocationRepository binLocationRepository) {
        super(BinLocation.class);
        this.binLocationRepository = binLocationRepository;
    }

    @Override
    public BinLocation deserialize(JsonParser jsonParser, DeserializationContext deserializationContext) throws IOException, JacksonException {
        ObjectCodec codec = jsonParser.getCodec();
        JsonNode node = codec.readTree(jsonParser);

        Integer binLocationId = node.get("binLocationId").asInt();
        String binLocationName = node.get("binLocationName").asText();

        Optional<BinLocation> binLocationOptional = binLocationRepository.findById(binLocationId);
        if(binLocationOptional.isPresent()){
            BinLocation binLocation = binLocationOptional.get();
            binLocation.setLocationName(binLocationName);
            return binLocation;
        }
        return new BinLocation();
    }
}
