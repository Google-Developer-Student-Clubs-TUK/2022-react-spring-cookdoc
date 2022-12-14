package project.cookdoc.domain.shop.controller;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import project.cookdoc.domain.shop.dto.ShopRegistrationRequest;
import project.cookdoc.domain.shop.service.ShopService;
import project.cookdoc.global.result.ResultCode;
import project.cookdoc.global.result.ResultResponse;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor(access = AccessLevel.PROTECTED)
@Slf4j
@RequestMapping("/api/v1/shops")
public class ShopController {
    private final ShopService shopService;
    @PostMapping
    public ResponseEntity<ResultResponse> registration(@RequestBody @Valid ShopRegistrationRequest request) {
        shopService.registrationShop(request);
        return ResponseEntity.ok(ResultResponse.of(ResultCode.SHOP_REGISTRATION_SUCCESS));
    }
}
