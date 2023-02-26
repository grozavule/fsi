package dev.ericdrake.controllers;

import dev.ericdrake.dtos.BinLocationDto;
import dev.ericdrake.entities.BinLocation;
import dev.ericdrake.services.BinLocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/bin_locations")
public class BinLocationController {
    @Autowired
    private BinLocationService binLocationService;

    @PostMapping("/")
    public String addBin(@RequestBody BinLocationDto binLocationDto){
        try {
            return binLocationService.addBinLocation(binLocationDto);
        } catch(Exception e){
            return e.getMessage();
        }
    }

    @GetMapping("/{binLocationId}")
    public Optional<BinLocationDto> getBinLocations(@PathVariable Integer binLocationId){
        return binLocationService.getBinLocationById(binLocationId);
    }

    @GetMapping("/")
    public List<BinLocation> getAllBinLocations(){
        return binLocationService.getAllBinLocations();
    }

    @PutMapping("/{binLocationId}")
    public String updateBinLocation(@RequestBody BinLocation binLocation, @PathVariable Integer binLocationId){
        Optional<BinLocationDto> binLocationDtoOptional = binLocationService.getBinLocationById(binLocationId);
        if(binLocationDtoOptional.isPresent()){
            BinLocationDto binLocationDto = binLocationDtoOptional.get();
            binLocationDto.setLocationName(binLocation.getLocationName());
            String response = binLocationService.updateBinLocation(binLocationDto);
            return response;
        }
        return "The bin location provided could not be found";
    }

    @DeleteMapping("/{binLocationId}")
    public void deleteBinLocation(@PathVariable Integer binLocationId){
        binLocationService.deleteBinLocation(binLocationId);
    }
}
