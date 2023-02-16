package dev.ericdrake.entities;

import dev.ericdrake.dtos.ItemDto;
import jakarta.persistence.*;

import java.time.LocalDate;

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
    private LocalDate expirationDate;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "bin_id")
    private Bin bin;

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

    public LocalDate getExpirationDate() {
        return expirationDate;
    }

    public void setExpirationDate(LocalDate expirationDate) {
        this.expirationDate = expirationDate;
    }

    public Bin getBin() {
        return bin;
    }

    public void setBin(Bin bin) {
        this.bin = bin;
    }
}
