package dev.ericdrake.dtos;

import dev.ericdrake.entities.Bin;
import dev.ericdrake.entities.BinLocation;

import java.util.Set;

public class BinLocationDto {
    private int binLocationId;
    private String locationName;
    private Set<Bin> bins;

    public BinLocationDto(){}

    public BinLocationDto(BinLocation binLocation){
        this.binLocationId = binLocation.getBinLocationId();
        this.locationName = binLocation.getLocationName().toUpperCase();
        this.bins = binLocation.getBins();
    }

    public BinLocationDto(int binLocationId, String locationName, Set<Bin> bins){
        this.binLocationId = binLocationId;
        this.locationName = locationName.toUpperCase();
        this.bins = bins;
    }

    public int getBinLocationId() {
        return binLocationId;
    }

    public void setBinLocationId(int binLocationId) {
        this.binLocationId = binLocationId;
    }

    public String getLocationName() {
        return locationName;
    }

    public void setLocationName(String locationName) {
        this.locationName = locationName.toUpperCase();
    }

    public Set<Bin> getBins() {
        return bins;
    }

    public void setBin(Set<Bin> bins) {
        this.bins = bins;
    }
}
