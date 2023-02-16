package dev.ericdrake.services;

import dev.ericdrake.dtos.ItemDto;
import dev.ericdrake.entities.Bin;
import dev.ericdrake.entities.Item;
import dev.ericdrake.repositories.BinRepository;
import dev.ericdrake.repositories.ItemRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ItemServiceImpl implements ItemService {
    @Autowired
    private ItemRepository itemRepository;

    @Autowired
    private BinRepository binRepository;

    @Override
    @Transactional
    public String addItem(ItemDto itemDto, Integer binId){
        try {
            Item item = new Item(itemDto);
            Optional<Bin> binOptional = binRepository.findById(binId);
            if(binOptional.isPresent()){
                Bin bin = binOptional.get();
                item.setBin(bin);
            } else {
                return "The bin provided could not be found";
            }
            itemRepository.saveAndFlush(item);
            return "The new item has been added";
        } catch(Exception e){
            return e.getMessage();
        }
    }

    @Override
    @Transactional
    public Optional<ItemDto> getItemById(Integer itemId){
        Optional<Item> item = itemRepository.findById(itemId);
        if(item.isPresent()){
            return Optional.of(new ItemDto(item.get()));
        }
        return Optional.empty();
    }

    @Override
    @Transactional
    public String updateItem(ItemDto itemDto){
        Optional<Item> itemOptional = itemRepository.findById(itemDto.getItemId());
        if(itemOptional.isPresent()){
            Item item = itemOptional.get();
            item.setQuantity(itemDto.getQuantity());
            item.setDescription(itemDto.getDescription());
            item.setExpirationDate(itemDto.getExpirationDate());
            item.setBin(itemDto.getBin());
            return "The item has been updated";
        }
        return "The item provided could not be found";
    }

    @Override
    @Transactional
    public String deleteItem(Integer itemId){
        Optional<Item> itemOptional = itemRepository.findById(itemId);
        if(itemOptional.isPresent()){
            itemRepository.delete(itemOptional.get());
            return "The item has been deleted";
        }
        return "The item provided could not be found";
    }
}
