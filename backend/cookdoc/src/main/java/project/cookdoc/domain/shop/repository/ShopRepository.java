package project.cookdoc.domain.shop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import project.cookdoc.domain.shop.entity.Shop;

import java.util.Optional;

public interface ShopRepository extends JpaRepository<Shop, Long> {
    boolean existsByAccount(String account);
}