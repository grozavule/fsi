package dev.ericdrake.controllers;

import dev.ericdrake.entities.Bin;
import dev.ericdrake.dtos.BinDto;
import dev.ericdrake.exceptions.BinDeletionException;
import dev.ericdrake.exceptions.InvalidBinException;
import dev.ericdrake.services.BinService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
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
    public Optional<BinDto> getBinById(@PathVariable Integer binId){
        return binService.getBinById(binId);
    }

    @GetMapping("/")
    public List<Bin> getAllBins(){
        return binService.getAllBins();
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
    public String deleteBin(@PathVariable Integer binId) throws BinDeletionException, InvalidBinException {
        binService.deleteBin(binId);
        return "The bin has been successfully deleted";
    }

    @ExceptionHandler({BinDeletionException.class, InvalidBinException.class, Exception.class})
    public ResponseEntity<String> handleException(Exception e){
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(e.getMessage());
    }
}
