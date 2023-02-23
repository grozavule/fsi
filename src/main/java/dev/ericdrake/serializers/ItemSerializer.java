package dev.ericdrake.serializers;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import dev.ericdrake.entities.Item;

import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class ItemSerializer extends JsonSerializer<Item> {
    @Override
    public void serialize(Item item, JsonGenerator jsonGenerator, SerializerProvider serializerProvider)
            throws IOException {
        jsonGenerator.writeStartObject();

        jsonGenerator.writeNumberField("itemId", item.getItemId());
        jsonGenerator.writeStringField("description", item.getDescription());
        jsonGenerator.writeNumberField("quantity", item.getQuantity());
        jsonGenerator.writeStringField("expirationDate", item.getExpirationDate().toString());
        jsonGenerator.writeNumberField("binId", item.getBin().getBinId());
        jsonGenerator.writeStringField("binLabel", item.getBin().getBinLabel());
        jsonGenerator.writeNumberField("binLocationId", item.getBin().getBinLocation().getBinLocationId());
        jsonGenerator.writeStringField("binLocationName", item.getBin().getBinLocation().getLocationName());

        jsonGenerator.writeEndObject();
    }
}
