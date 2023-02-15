package dev.ericdrake.services;

import dev.ericdrake.dtos.BinDto;
import dev.ericdrake.entities.Bin;
import dev.ericdrake.repositories.BinRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class BinServiceImpl implements BinService {
    @Autowired
    private BinRepository binRepository;
    @Transactional
    public String addBin(BinDto binDto){
        try {
            Bin bin = new Bin(binDto);
            binRepository.saveAndFlush(bin);

            return "The new bin was successfully added.";
        } catch(Exception e){
            return e.getMessage();
        }
    }

    @Transactional
    public Optional<BinDto> getBinById(Integer binId){
        Optional<Bin> bin = binRepository.findById(binId);
        if(bin.isPresent()){
            return Optional.of(new BinDto(bin.get()));
        }
        return Optional.empty();
    }
}
