package project.cookdoc.domain.shop.controller;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import project.cookdoc.domain.shop.dto.ShopRegistrationRequest;
import project.cookdoc.domain.shop.entity.Shop;
import project.cookdoc.domain.shop.service.ShopService;
import project.cookdoc.global.result.ResultCode;
import project.cookdoc.global.result.ResultResponse;

import javax.validation.Valid;
import java.io.IOException;
import java.util.List;

@RestController
@RequiredArgsConstructor(access = AccessLevel.PROTECTED)
@Slf4j
@RequestMapping("/api/v1/shops")
public class ShopController {
    private final ShopService shopService;
    @PostMapping
    public ResponseEntity<ResultResponse> registration(ShopRegistrationRequest request, @RequestPart("images") List<MultipartFile> images) throws IOException {
        List<String> urls = shopService.getUploadedImageURLs(images);
        shopService.registrationShop(request, urls);
        return ResponseEntity.ok(ResultResponse.of(ResultCode.SHOP_REGISTRATION_SUCCESS));
    }

    @GetMapping
    public ResponseEntity<ResultResponse> getAllShops(){
        List<Shop> shops = shopService.getAllShops();
        return ResponseEntity.ok(ResultResponse.of(ResultCode.SHOP_GET_SUCCESS, shops));
    }

    @GetMapping("/{shop_id}")
    public ResponseEntity<ResultResponse> getDetailShops(@PathVariable("shop_id") Long shop_id){
        Shop shop = shopService.getDetailShop(shop_id);
        return ResponseEntity.ok(ResultResponse.of(ResultCode.SHOP_GET_SUCCESS, shop));
    }
}
