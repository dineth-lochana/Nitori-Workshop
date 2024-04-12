package net.DinethLochana.DinethServer.repository;

import net.DinethLochana.DinethServer.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface Users_Repository extends JpaRepository<Users, Integer> {
	Optional<Users> findByUseremail (String useremail);
}
