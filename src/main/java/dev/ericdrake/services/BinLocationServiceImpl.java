package dev.ericdrake.services;

import dev.ericdrake.dtos.BinDto;
import dev.ericdrake.dtos.BinLocationDto;
import dev.ericdrake.entities.Bin;
import dev.ericdrake.entities.BinLocation;
import dev.ericdrake.repositories.BinLocationRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class BinLocationServiceImpl implements BinLocationService {
    @Autowired
    private BinLocationRepository binLocationRepository;

    @Override
    @Transactional
    public String addBinLocation(BinLocationDto binLocationDto){
        try {
            BinLocation bin = new BinLocation(binLocationDto);
            binLocationRepository.saveAndFlush(bin);

            return "The new bin location was successfully added.";
        } catch(Exception e){
            return e.getMessage();
        }
    }

    @Override
    @Transactional
    public Optional<BinLocationDto> getBinLocationById(Integer binLocationId){
        Optional<BinLocation> binLocation = binLocationRepository.findById(binLocationId);
        if(binLocation.isPresent()){
            return Optional.of(new BinLocationDto(binLocation.get()));
        }
        return Optional.empty();
    }
}
