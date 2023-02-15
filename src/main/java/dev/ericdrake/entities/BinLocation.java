package dev.ericdrake.entities;

import dev.ericdrake.dtos.BinLocationDto;
import jakarta.persistence.*;

import java.util.Set;

@Entity
@Table(name="bin_locations")
public class BinLocation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int binLocationId;

    @Column(unique = true, nullable = false)
    private String locationName;

    @OneToMany(mappedBy = "binLocation", cascade = {CascadeType.PERSIST, CascadeType.MERGE}, fetch = FetchType.LAZY)
    private Set<Bin> bins;

    public BinLocation(){}

    public BinLocation(BinLocationDto binLocationDto){
        this.binLocationId = binLocationDto.getBinLocationId();
        this.locationName = binLocationDto.getLocationName();
        this.bins = binLocationDto.getBins();
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
        this.locationName = locationName;
    }

    public Set<Bin> getBins() {
        return bins;
    }

    public void setBin(Set<Bin> bins) {
        this.bins = bins;
    }
}
