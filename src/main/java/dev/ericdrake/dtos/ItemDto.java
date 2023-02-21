package dev.ericdrake.dtos;

import dev.ericdrake.entities.Bin;
import dev.ericdrake.entities.Item;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.io.Serializable;
@AllArgsConstructor
public class ItemDto implements Serializable {
    private int itemId;
    private float quantity;
    private String description;
    private String expirationDate;
    private Bin bin;

    public ItemDto() {}

    public ItemDto(Item item) {
        this.itemId = item.getItemId();
        this.quantity = item.getQuantity();
        this.description = item.getDescription();
        this.expirationDate = item.getExpirationDate();
        this.bin = item.getBin();
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
