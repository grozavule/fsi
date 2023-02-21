package dev.ericdrake.entities;

import com.fasterxml.jackson.annotation.*;
import dev.ericdrake.dtos.ItemDto;
import jakarta.persistence.*;

import java.util.Set;

@Entity
@Table(name = "items")
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int itemId;
    @Column(name = "quantity")
    private float quantity;
    @Column(name = "description")
    private String description;
    @Column(name = "expiration_date")
    private String expirationDate;

    //@JsonBackReference
    @JsonManagedReference(value="binConnection")
    @ManyToOne
    @JoinColumn(name = "bin_id")
    private Bin bin;

    @ManyToMany
    @JoinTable(
            name = "item_tags",
            joinColumns = @JoinColumn(name = "item_id"),
            inverseJoinColumns = @JoinColumn(name = "tag_id")
    )
    private Set<Tag> tags;

    public Item(){}

    public Item(ItemDto itemDto){
        this.itemId = itemDto.getItemId();
        this.quantity = itemDto.getQuantity();
        this.description = itemDto.getDescription();
        this.expirationDate = itemDto.getExpirationDate();
        this.bin = itemDto.getBin();
    }

    public int getItemId() {
        return itemId;
    }

    public void setItemId(int itemId) {
        this.itemId = itemId;
    }

    public float getQuantity() {
        return quantity;
    }

    public void setQuantity(float quantity) {
        this.quantity = quantity;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getExpirationDate() {
        return expirationDate;
    }

    public void setExpirationDate(String expirationDate) {
        this.expirationDate = expirationDate;
    }

    public Bin getBin() {
        return bin;
    }

    public void setBin(Bin bin) {
        this.bin = bin;
    }
}
