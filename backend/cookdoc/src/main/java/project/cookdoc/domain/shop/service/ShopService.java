package project.cookdoc.domain.shop.service;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import project.cookdoc.domain.shop.repository.ShopRepository;

@Service
@RequiredArgsConstructor(access = AccessLevel.PROTECTED)
public class ShopService {
    private final ShopRepository shopRepository;

}