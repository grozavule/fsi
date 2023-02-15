package dev.ericdrake.controllers;

import dev.ericdrake.dtos.BinDto;
import dev.ericdrake.dtos.BinLocationDto;
import dev.ericdrake.services.BinLocationService;
import dev.ericdrake.services.BinService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
}
