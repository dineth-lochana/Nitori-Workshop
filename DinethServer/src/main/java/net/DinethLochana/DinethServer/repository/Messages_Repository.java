package net.DinethLochana.DinethServer.repository;

import net.DinethLochana.DinethServer.entity.Messages;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

import java.util.List;

public interface Messages_Repository extends JpaRepository<Messages, Integer> {
    List<Messages> findBySubmittedby(String submittedby);
}
