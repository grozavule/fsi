package dev.ericdrake.configuration;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.module.SimpleModule;
import dev.ericdrake.deserializers.BinDeserializer;
import dev.ericdrake.deserializers.BinLocationDeserializer;
import dev.ericdrake.deserializers.ItemDeserializer;
import dev.ericdrake.entities.Bin;
import dev.ericdrake.entities.BinLocation;
import dev.ericdrake.entities.Item;
import dev.ericdrake.repositories.BinLocationRepository;
import dev.ericdrake.repositories.BinRepository;
import dev.ericdrake.repositories.ItemRepository;
import dev.ericdrake.serializers.BinLocationSerializer;
import dev.ericdrake.serializers.BinSerializer;
import dev.ericdrake.serializers.ItemSerializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.fasterxml.jackson.datatype.hibernate5.Hibernate5Module;

@Configuration
public class JacksonConfiguration {
    @Bean
    public ObjectMapper objectMapper(ItemRepository itemRepository, BinRepository binRepository, BinLocationRepository binLocationRepository){
        ObjectMapper objectMapper = new ObjectMapper();

        SimpleModule itemSerializerModule = new SimpleModule();
        itemSerializerModule.addSerializer(Item.class, new ItemSerializer());
        itemSerializerModule.addDeserializer(Item.class, new ItemDeserializer(itemRepository, binRepository));

        SimpleModule binSerializerModule = new SimpleModule();
        binSerializerModule.addSerializer(Bin.class, new BinSerializer());
        binSerializerModule.addDeserializer(Bin.class, new BinDeserializer(binRepository, binLocationRepository));

        SimpleModule binLocationSerializerModule = new SimpleModule();
        binLocationSerializerModule.addSerializer(BinLocation.class, new BinLocationSerializer());
        binLocationSerializerModule.addDeserializer(BinLocation.class, new BinLocationDeserializer(binLocationRepository));

        objectMapper.registerModule(new JavaTimeModule());
        objectMapper.registerModule(itemSerializerModule);
        objectMapper.registerModule(binSerializerModule);
        objectMapper.registerModule(binLocationSerializerModule);
        objectMapper.registerModule(new Hibernate5Module());

        return objectMapper;
    }
}
