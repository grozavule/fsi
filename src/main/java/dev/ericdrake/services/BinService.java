package dev.ericdrake.services;

import dev.ericdrake.dtos.BinDto;
import jakarta.transaction.Transactional;

import java.util.Optional;

public interface BinService {
    @Transactional
    public String addBin(BinDto binDto);

    @Transactional
    public Optional<BinDto> getBinById(Integer binId);
}
