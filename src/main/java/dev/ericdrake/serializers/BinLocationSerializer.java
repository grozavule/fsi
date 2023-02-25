package dev.ericdrake.serializers;

import com.fasterxml.jackson.core.JacksonException;
import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.ObjectCodec;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;
import dev.ericdrake.entities.BinLocation;
import dev.ericdrake.repositories.BinLocationRepository;

import java.io.IOException;
import java.util.Optional;

public class BinLocationSerializer extends JsonSerializer<BinLocation> {

    @Override
    public void serialize(BinLocation binLocation, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws IOException {
        jsonGenerator.writeStartObject();

        jsonGenerator.writeNumberField("binLocationId", binLocation.getBinLocationId());
        jsonGenerator.writeStringField("binLocationName", binLocation.getLocationName());

        jsonGenerator.writeEndObject();
    }
}
