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

    @PostMapping("/")
    public String addBin(@RequestBody BinDto binDto){
        try {
            return binService.addBin(binDto);
        } catch(Exception e){
            return e.getMessage();
        }
    }

    @GetMapping("/{binId}")
    public Optional<BinDto> getBins(@PathVariable Integer binId){
        return binService.getBinById(binId);
    }
}
