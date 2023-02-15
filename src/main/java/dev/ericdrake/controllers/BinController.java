package dev.ericdrake.controllers;

import dev.ericdrake.entities.Bin;
import dev.ericdrake.dtos.BinDto;
import dev.ericdrake.services.BinService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/bins")
public class BinController {
    @Autowired
    private BinService binService;

    @PostMapping("/bin_location/{binLocationId}")
    public String addBin(@RequestBody BinDto binDto, @PathVariable Integer binLocationId){
        try {
            String response = binService.addBin(binDto, binLocationId);
            return response;
        } catch(Exception e){
            return e.getMessage();
        }
    }

    @GetMapping("/{binId}")
    public Optional<BinDto> getBins(@PathVariable Integer binId){
        return binService.getBinById(binId);
    }

    @PutMapping("/{binId}")
    public String updateBin(@RequestBody Bin bin, @PathVariable Integer binId){
        Optional<BinDto> binDtoOptional = binService.getBinById(binId);
        if(binDtoOptional.isPresent()){
            BinDto binDto = binDtoOptional.get();
            binDto.setBinLabel(bin.getBinLabel());
            binDto.setBinLocation(bin.getBinLocation());
            String response = binService.updateBin(binDto);
            return response;
        }
        return "The bin provided could not be found";
    }

    @DeleteMapping("/{binId}")
    public String deleteBin(@PathVariable Integer binId){
        binService.deleteBin(binId);
        return "The bin has been successfully deleted";
    }
}
