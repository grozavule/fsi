package dev.ericdrake.deserializers;

import com.fasterxml.jackson.core.JacksonException;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.ObjectCodec;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;
import dev.ericdrake.entities.Bin;
import dev.ericdrake.repositories.BinRepository;

import java.io.IOException;
import java.util.Optional;

public class BinDeserializer extends StdDeserializer<Bin> {
    private final BinRepository binRepository;

    public BinDeserializer(BinRepository binRepository){
        super(Bin.class);
        this.binRepository = binRepository;
    }

    @Override
    public Bin deserialize(JsonParser jsonParser, DeserializationContext deserializationContext) throws IOException {
        ObjectCodec codec = jsonParser.getCodec();
        JsonNode node = codec.readTree(jsonParser);
        Integer binId = node.get("binId").asInt();
        Optional<Bin> binOptional = binRepository.findById(binId);
        if(binOptional.isPresent()){
            return binOptional.get();
        } else {
            return new Bin();
        }
    }
}
