package dev.ericdrake.services;

import dev.ericdrake.dtos.ItemDto;
import jakarta.transaction.Transactional;

import java.util.Optional;

public interface ItemService {
    @Transactional
    String addItem(ItemDto itemDto, Integer binId);

    @Transactional
    Optional<ItemDto> getItemById(Integer itemId);

    @Transactional
    String updateItem(ItemDto itemDto);

    @Transactional
    String deleteItem(Integer itemId);
}
