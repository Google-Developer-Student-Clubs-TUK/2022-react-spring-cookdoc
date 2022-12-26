package project.cookdoc.domain.shop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import project.cookdoc.domain.shop.entity.Shop;
import project.cookdoc.domain.shop.entity.ShopImage;

import java.util.List;

public interface ShopImageRepository extends JpaRepository<ShopImage, Long> {
    @Query(value = "select * from shop_images where shop_id = ?", nativeQuery = true)
    List<ShopImage> findImagesByShopId(Long id);
}
