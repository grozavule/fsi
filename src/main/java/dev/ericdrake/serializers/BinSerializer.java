package dev.ericdrake.serializers;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import dev.ericdrake.entities.Bin;

import java.io.IOException;

public class BinSerializer extends JsonSerializer<Bin> {

    @Override
    public void serialize(Bin bin, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws IOException {
        jsonGenerator.writeStartObject();

        jsonGenerator.writeNumberField("binId", bin.getBinId());
        jsonGenerator.writeStringField("binLabel", bin.getBinLabel());
        jsonGenerator.writeNumberField("binLocationId", bin.getBinLocation().getBinLocationId());
        jsonGenerator.writeStringField("binLocationName", bin.getBinLocation().getLocationName());

        jsonGenerator.writeEndObject();
    }
}
