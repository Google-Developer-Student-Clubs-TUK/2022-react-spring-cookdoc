package project.cookdoc.domain.shop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import project.cookdoc.domain.shop.entity.Shop;

public interface ShopRepository extends JpaRepository<Shop, Long> {
    Shop getById(Long shop_id);
}