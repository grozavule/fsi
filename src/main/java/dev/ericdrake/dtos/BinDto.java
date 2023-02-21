package dev.ericdrake.dtos;

import dev.ericdrake.entities.Bin;
import dev.ericdrake.entities.BinLocation;
import dev.ericdrake.entities.Item;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class BinDto implements Serializable {
    private Integer binId;
    private String binLabel;
    private List<Item> items = new ArrayList<>();
    private BinLocation binLocation;

    public BinDto(){}

    public BinDto(Integer binId, String binLabel, List<Item> items, BinLocation binLocation){
        this.binId = binId;
        this.binLabel = binLabel.toUpperCase();
        this.items = items;
        this.binLocation = binLocation;
    }

    public BinDto(Bin bin){
        this.binId = bin.getBinId();
        this.binLabel = bin.getBinLabel().toUpperCase();
        this.items = bin.getItems();
        this.binLocation = bin.getBinLocation();
    }

    public Integer getBinId() {
        return binId;
    }

    public void setBinId(Integer binId) {
        this.binId = binId;
    }

    public String getBinLabel() {
        return binLabel;
    }

    public void setBinLabel(String binLabel) {
        this.binLabel = binLabel.toUpperCase();
    }

    public BinLocation getBinLocation() {
        return binLocation;
    }

    public void setBinLocation(BinLocation binLocation) {
        this.binLocation = binLocation;
    }

    public List<Item> getItems() {
        return items;
    }

    public void setItems(List<Item> items) {
        this.items = items;
    }
}
