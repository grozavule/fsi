package dev.ericdrake.services;

import dev.ericdrake.dtos.BinDto;
import dev.ericdrake.entities.Bin;
import dev.ericdrake.entities.Item;
import dev.ericdrake.exceptions.BinDeletionException;
import dev.ericdrake.exceptions.InvalidBinException;
import jakarta.transaction.Transactional;

import java.util.List;
import java.util.Optional;

public interface BinService {
    @Transactional
    public String addBin(BinDto binDto, Integer binLocationId);

    @Transactional
    public Optional<BinDto> getBinById(Integer binId);

    @Transactional
    public String updateBin(BinDto binDto);

    @Transactional
    public String deleteBin(Integer binId) throws BinDeletionException, InvalidBinException;

    @Transactional
    public List<Bin> getAllBins();
}
