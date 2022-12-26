package project.cookdoc.domain.user.controller;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import project.cookdoc.domain.shop.dto.ShopRegistrationRequest;
import project.cookdoc.domain.shop.entity.Shop;
import project.cookdoc.domain.shop.service.ShopService;
import project.cookdoc.domain.user.dto.SubscribeRequest;
import project.cookdoc.domain.user.service.UserService;
import project.cookdoc.global.result.ResultCode;
import project.cookdoc.global.result.ResultResponse;

import javax.validation.Valid;
import java.io.IOException;
import java.util.List;

@RestController
@RequiredArgsConstructor(access = AccessLevel.PROTECTED)
@Slf4j
@RequestMapping("/api/v1/users")
public class UserController {
    private final UserService userService;

    @PostMapping("{user_id}/shops/{shop_id}/subscribes")
    public ResponseEntity<ResultResponse> registration(@PathVariable("user_id") Long user_id, @PathVariable("shop_id") Long shop_id,  @RequestBody @Valid SubscribeRequest request) {
        userService.subscribe(user_id, shop_id, request);
        return ResponseEntity.ok(ResultResponse.of(ResultCode.USER_SUBSCRIBE_SUCCESS));
    }
}
