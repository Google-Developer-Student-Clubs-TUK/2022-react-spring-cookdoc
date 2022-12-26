package project.cookdoc.domain.shop.mapper;

import org.springframework.stereotype.Component;
import project.cookdoc.domain.shop.entity.ShopImage;

@Component
public class ShopImageMapper {

    public static ShopImage toEntity(String url, Long shop_id){
        return ShopImage.builder()
                .image_url(url)
                .shop_id(shop_id)
                .build();
    }
}
