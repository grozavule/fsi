package dev.ericdrake.services;

import dev.ericdrake.dtos.BinDto;
import dev.ericdrake.entities.Bin;
import dev.ericdrake.entities.BinLocation;
import dev.ericdrake.entities.Item;
import dev.ericdrake.exceptions.BinDeletionException;
import dev.ericdrake.exceptions.InvalidBinException;
import dev.ericdrake.repositories.BinLocationRepository;
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

    @Autowired
    private BinLocationRepository binLocationRepository;

    @Transactional
    public String addBin(BinDto binDto, Integer binLocationId){
        try {
            Bin bin = new Bin(binDto);
            Optional<BinLocation> binLocationOptional = binLocationRepository.findById(binLocationId);
            if(binLocationOptional.isPresent()){
                BinLocation binLocation = binLocationOptional.get();
                bin.setBinLocation(binLocation);
                binLocation.addBin(bin);

                binRepository.saveAndFlush(bin);
                binLocationRepository.saveAndFlush(binLocation);
            } else {
                return "The bin location provided for this bin could not be found";
            }

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

    @Override
    @Transactional
    public String updateBin(BinDto binDto){
        Optional<Bin> binOptional = binRepository.findById(binDto.getBinId());
        if(binOptional.isPresent()){
            Bin bin = binOptional.get();
            bin.setBinLabel(binDto.getBinLabel());
            bin.setBinLocation(binDto.getBinLocation());
            return "The bin has been updated";
        }
        return "The bin provided could not be found";
    }

    @Override
    @Transactional
    public String deleteBin(Integer binId) throws BinDeletionException, InvalidBinException {
        Optional<Bin> binOptional = binRepository.findById(binId);
        if(binOptional.isPresent()){
            try {
                binRepository.delete(binOptional.get());
            } catch(Exception e){
                throw new BinDeletionException();
            }
            return "The bin has been deleted";
        }
        throw new InvalidBinException();
    }

    @Override
    public List<Bin> getAllBins() {
        List<Bin> bins = binRepository.getAllBinsWithBinLocations();
        return bins;
    }

//    private void displayBins(List<Bin> bins) {
//        for(Bin bin : bins){
//            System.out.println("Bin Id:" + bin.getBinId());
//            System.out.println("Bin Location:" + bin.getBinLocation().getLocationName());
//        }
//    }
}
