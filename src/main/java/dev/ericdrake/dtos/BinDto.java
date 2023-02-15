package dev.ericdrake.dtos;

import dev.ericdrake.entities.Bin;
import dev.ericdrake.entities.BinLocation;

public class BinDto {
    private Integer binId;
    private String binLabel;
    private BinLocation binLocation;

    public BinDto(){}

    public BinDto(Integer binId, String binLabel, BinLocation binLocation){
        this.binId = binId;
        this.binLabel = binLabel.toUpperCase();
        this.binLocation = binLocation;
    }

    public BinDto(Bin bin){
        this.binId = bin.getBinId();
        this.binLabel = bin.getBinLabel().toUpperCase();
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
}
