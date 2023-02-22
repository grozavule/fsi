package dev.ericdrake.repositories;

import dev.ericdrake.entities.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ItemRepository extends JpaRepository<Item, Integer> {
    @Query("select item from Item as item left join fetch item.bin as b left join fetch b.binLocation")
    public List<Item> getAllItemsWithAllAncestors();

    @Query("SELECT i from Item i JOIN FETCH i.bin b JOIN FETCH b.binLocation")
    public List<Item> getAllItemsWithBinsAndBinLocations();
}
