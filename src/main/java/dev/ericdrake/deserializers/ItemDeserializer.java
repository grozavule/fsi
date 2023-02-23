package dev.ericdrake.deserializers;

import com.fasterxml.jackson.core.JacksonException;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.ObjectCodec;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;
import dev.ericdrake.entities.Bin;
import dev.ericdrake.entities.Item;
import dev.ericdrake.repositories.BinRepository;
import dev.ericdrake.repositories.ItemRepository;

import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Optional;

public class ItemDeserializer extends StdDeserializer<Item> {
    private final ItemRepository itemRepository;

    private final BinRepository binRepository;

    public ItemDeserializer(ItemRepository itemRepository, BinRepository binRepository){
        super(Item.class);
        this.itemRepository = itemRepository;
        this.binRepository = binRepository;
    }

    @Override
    public Item deserialize(JsonParser jsonParser, DeserializationContext deserializationContext) throws IOException, JacksonException {
        ObjectCodec codec = jsonParser.getCodec();
        JsonNode node = codec.readTree(jsonParser);

        Integer itemId = node.get("itemId").asInt();
        String description = node.get("description").asText();
        float quantity = Float.parseFloat(node.get("quantity").asText());
        LocalDate expirationDate = LocalDate.parse(node.get("expirationDate").asText(), DateTimeFormatter.ISO_LOCAL_DATE);
        Integer binId = node.get("binId").asInt();

        Optional<Item> itemOptional = itemRepository.findById(itemId);
        Optional<Bin> binOptional = binRepository.findById(binId);
        if(itemOptional.isPresent()){
            Item item = itemOptional.get();
            item.setDescription(description);
            item.setQuantity(quantity);
            item.setExpirationDate(expirationDate);
            if(binOptional.isPresent()){
                item.setBin(binOptional.get());
            }
            return item;
        }
        return new Item();
    }
}
