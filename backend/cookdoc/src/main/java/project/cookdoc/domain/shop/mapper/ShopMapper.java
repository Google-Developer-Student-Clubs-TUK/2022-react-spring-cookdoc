package project.cookdoc.domain.shop.mapper;

import project.cookdoc.domain.shop.dto.ShopRegistrationRequest;
import project.cookdoc.domain.shop.entity.Shop;

public class ShopMapper {
    public static Shop toEntity(ShopRegistrationRequest request){
        return Shop.builder()
                .user_id(request.getUser_id())
                .name(request.getName())
                .address(request.getAddress())
                .phone(request.getPhone())
                .detail(request.getDetail())
                .category(request.getCategory())
                .build();
    }
}
