package dev.ericdrake.controllers;

import dev.ericdrake.dtos.ItemDto;
import dev.ericdrake.entities.Item;
import dev.ericdrake.services.BinService;
import dev.ericdrake.services.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/items")
public class ItemController {
    @Autowired
    private ItemService itemService;

    @Autowired
    private BinService binService;

    @PostMapping("/bin/{binId}")
    public String addItem(@RequestBody ItemDto itemDto, @PathVariable Integer binId){
        try {
            String response = itemService.addItem(itemDto, binId);
            return response;
        } catch(Exception e){
            return e.getMessage();
        }
    }

    @GetMapping("/{itemId}")
    public Optional<ItemDto> getItem(@PathVariable Integer itemId){
        return itemService.getItemById(itemId);
    }

    @GetMapping("/")
    public List<Item> getAllItems(){
        return itemService.getAllItems();
    }

    @PutMapping("/{itemId}")
    public String updateItem(@RequestBody Item item, @PathVariable Integer itemId){
        Optional<ItemDto> itemDtoOptional = itemService.getItemById(itemId);
        if(itemDtoOptional.isPresent()){
            ItemDto itemDto = itemDtoOptional.get();
            itemDto.setQuantity(item.getQuantity());
            itemDto.setDescription(item.getDescription());
            itemDto.setExpirationDate(item.getExpirationDate());
            itemDto.setBin(item.getBin());
            String response = itemService.updateItem(itemDto);
            return response;
        }
        return "The item provided could not be found";
    }

    @DeleteMapping("/{itemId}")
    public String deleteItem(@PathVariable Integer itemId){
        itemService.deleteItem(itemId);
        return "The item has been successfully deleted";
    }
}
