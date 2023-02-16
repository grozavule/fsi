package dev.ericdrake.entities;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import dev.ericdrake.dtos.BinDto;
import jakarta.persistence.*;

import java.util.List;
import java.util.Set;

@Entity
@Table(name="bins")
public class Bin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer binId;

    @Column(unique = true)
    private String binLabel;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "bin_location_id")
    private BinLocation binLocation;

    @OneToMany(mappedBy = "bin", cascade = {CascadeType.PERSIST, CascadeType.MERGE}, fetch = FetchType.LAZY)
    private Set<Item> items;

    public Bin(){}

    public Bin(BinDto binDto){
        this.binId = binDto.getBinId();
        this.binLabel = binDto.getBinLabel().toUpperCase();
        this.binLocation = binDto.getBinLocation();
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

    public Set<Item> getItems() {
        return items;
    }

    public void setItems(Set<Item> items) {
        this.items = items;
    }
}
