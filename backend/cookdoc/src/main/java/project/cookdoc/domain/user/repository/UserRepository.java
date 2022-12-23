package project.cookdoc.domain.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import project.cookdoc.domain.shop.entity.Shop;
import project.cookdoc.domain.user.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
}