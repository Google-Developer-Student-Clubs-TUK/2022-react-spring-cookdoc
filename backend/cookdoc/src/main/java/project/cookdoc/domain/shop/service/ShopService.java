package project.cookdoc.domain.shop.service;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import project.cookdoc.domain.shop.dto.ShopRegistrationRequest;
import project.cookdoc.domain.shop.entity.Shop;
import project.cookdoc.domain.shop.mapper.ShopMapper;
import project.cookdoc.domain.shop.repository.ShopRepository;

@Service
@RequiredArgsConstructor(access = AccessLevel.PROTECTED)
public class ShopService {
    private final ShopRepository shopRepository;
    public void registrationShop(ShopRegistrationRequest request) {
        Shop shop = ShopMapper.toEntity(request);
        shopRepository.save(shop);
    }
}