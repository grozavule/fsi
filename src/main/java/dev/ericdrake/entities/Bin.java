package dev.ericdrake.entities;

import com.fasterxml.jackson.annotation.*;
import dev.ericdrake.dtos.BinDto;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="bins")
public class Bin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer binId;

    @Column(unique = true)
    private String binLabel;

    @JsonBackReference
    //@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "binLocationId")
    @ManyToOne
    @JoinColumn(name = "bin_location_id")
    private BinLocation binLocation;

    //@JsonManagedReference
    @JsonBackReference(value="binConnection")
    @OneToMany(mappedBy = "bin", cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JsonIgnore
    private List<Item> items;

    public Bin(){}

    public Bin(BinDto binDto){
        System.out.println("Attempting to create Bin object from BinDto");
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

    public List<Item> getItems() {
        if(items == null){
            items = new ArrayList<>();
        }
        return items;
    }

    public void addItem(Item item){
        this.getItems().add(item);
        item.setBin(this);
    }
    public void setItems(List<Item> items) {
        this.items = items;
    }

    @Override
    public String toString() {
        return "Bin{" +
                "binId=" + binId +
                ", binLabel='" + binLabel + '\'' +
                ", binLocation=" + binLocation +
                //", items=" + items +
                '}';
    }
}
