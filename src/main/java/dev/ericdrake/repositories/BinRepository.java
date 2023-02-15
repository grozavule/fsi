package dev.ericdrake.repositories;

import dev.ericdrake.entities.Bin;
import dev.ericdrake.entities.BinLocation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.Set;

@Repository
public interface BinRepository extends JpaRepository<Bin, Integer> {
    //public Set<Bin> findAllBinsByLocation(BinLocation binLocation);

}
