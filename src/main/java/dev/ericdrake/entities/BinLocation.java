package dev.ericdrake.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import dev.ericdrake.dtos.BinLocationDto;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name="bin_locations")
public class BinLocation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int binLocationId;

    @Column(unique = true, nullable = false)
    private String locationName;

    //@JsonBackReference(value="binLocationConnection")
    @JsonManagedReference
    @OneToMany(mappedBy = "binLocation", cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    private List<Bin> bins;

    public BinLocation(){}

    public BinLocation(BinLocationDto binLocationDto){
        this.binLocationId = binLocationDto.getBinLocationId();
        this.locationName = binLocationDto.getLocationName().toUpperCase();
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
        this.locationName = locationName.toUpperCase();
    }

    public List<Bin> getBins() {
        return bins;
    }

    public void addBin(Bin bin){
        List<Bin> bins = this.getBins();
        bins.add(bin);
        bin.setBinLocation(this);
    }

    public void setBin(List<Bin> bins) {
        this.bins = bins;
    }

    @Override
    public String toString() {
        return "BinLocation{" +
                "binLocationId=" + binLocationId +
                ", locationName='" + locationName + '\'' +
                ", bins=" + bins +
                '}';
    }
}
