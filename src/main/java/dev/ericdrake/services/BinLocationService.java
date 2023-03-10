package dev.ericdrake.services;

import dev.ericdrake.dtos.BinDto;
import dev.ericdrake.dtos.BinLocationDto;
import dev.ericdrake.entities.BinLocation;
import jakarta.transaction.Transactional;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Optional;

public interface BinLocationService {
    @Transactional
    public String addBinLocation(BinLocationDto binLocationDto);

    @Transactional
    public Optional<BinLocationDto> getBinLocationById(Integer binLocationId);

    @Transactional
    public String updateBinLocation(BinLocationDto binLocationDto);

    @Transactional
    public String deleteBinLocation(Integer binLocationId);

    public List<BinLocation> getAllBinLocations();
}
