package dev.ericdrake.serializers;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import dev.ericdrake.entities.BinLocation;

import java.io.IOException;

public class BinLocationSerializer extends JsonSerializer<BinLocation> {

    @Override
    public void serialize(BinLocation binLocation, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws IOException {
        jsonGenerator.writeStartObject();

        jsonGenerator.writeNumberField("binLocationId", binLocation.getBinLocationId());
        jsonGenerator.writeStringField("binLocationName", binLocation.getLocationName());

        jsonGenerator.writeEndObject();
    }
}
