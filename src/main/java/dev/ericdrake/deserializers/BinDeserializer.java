package dev.ericdrake.deserializers;

import com.fasterxml.jackson.core.JacksonException;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.ObjectCodec;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;
import dev.ericdrake.entities.Bin;
import dev.ericdrake.entities.BinLocation;
import dev.ericdrake.repositories.BinLocationRepository;
import dev.ericdrake.repositories.BinRepository;

import java.io.IOException;
import java.util.Optional;

public class BinDeserializer extends StdDeserializer<Bin> {
    private final BinRepository binRepository;

    private final BinLocationRepository binLocationRepository;

    public BinDeserializer(BinRepository binRepository, BinLocationRepository binLocationRepository){
        super(Bin.class);
        this.binRepository = binRepository;
        this.binLocationRepository = binLocationRepository;
    }

    @Override
    public Bin deserialize(JsonParser jsonParser, DeserializationContext deserializationContext) throws IOException {
        ObjectCodec codec = jsonParser.getCodec();
        JsonNode node = codec.readTree(jsonParser);

        Integer binId = node.get("binId").asInt();
        String binLabel = node.get("binLabel").asText();
        Integer binLocationId = node.get("binLocationId").asInt();

        Optional<Bin> binOptional = binRepository.findById(binId);
        Optional<BinLocation> binLocationOptional = binLocationRepository.findById(binLocationId);

        if(binOptional.isPresent()){
            Bin bin = binOptional.get();
            bin.setBinLabel(binLabel);
            if(binLocationOptional.isPresent()){
                BinLocation binLocation = binLocationOptional.get();
                bin.setBinLocation(binLocation);
            }
            return bin;
        } else {
            return new Bin();
        }
    }
}
