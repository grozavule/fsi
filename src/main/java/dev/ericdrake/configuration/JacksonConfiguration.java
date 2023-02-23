package dev.ericdrake.configuration;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.module.SimpleModule;
import dev.ericdrake.entities.Bin;
import dev.ericdrake.entities.Item;
import dev.ericdrake.serializers.BinSerializer;
import dev.ericdrake.serializers.ItemSerializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;

@Configuration
public class JacksonConfiguration {
    @Bean
    public ObjectMapper objectMapper(){
        ObjectMapper objectMapper = new ObjectMapper();

        SimpleModule itemSerializerModule = new SimpleModule();
        itemSerializerModule.addSerializer(Item.class, new ItemSerializer());

        SimpleModule binSerializerModule = new SimpleModule();
        binSerializerModule.addSerializer(Bin.class, new BinSerializer());

        objectMapper.registerModule(new JavaTimeModule());
        objectMapper.registerModule(itemSerializerModule);
        objectMapper.registerModule(binSerializerModule);

        return objectMapper;
    }
}
