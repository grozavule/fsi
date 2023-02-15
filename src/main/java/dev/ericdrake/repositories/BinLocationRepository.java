package dev.ericdrake.repositories;

import dev.ericdrake.entities.BinLocation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BinLocationRepository extends JpaRepository<BinLocation, Integer>  {
}
