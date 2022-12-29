package project.cookdoc.domain.user.controller;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import project.cookdoc.domain.user.dto.SubscribeRequest;
import project.cookdoc.domain.user.dto.SubscribeResponse;
import project.cookdoc.domain.user.service.UserService;
import project.cookdoc.global.result.ResultCode;
import project.cookdoc.global.result.ResultResponse;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequiredArgsConstructor(access = AccessLevel.PROTECTED)
@Slf4j
@RequestMapping("/api/v1/users")
public class UserController {
    private final UserService userService;

    @PostMapping("{user_id}/shops/{shop_id}/subscribes")
    public ResponseEntity<ResultResponse> registration(@PathVariable("user_id") Long user_id, @PathVariable("shop_id") Long shop_id,  @RequestBody @Valid SubscribeRequest request) {
        userService.registration(user_id, shop_id, request);
        return ResponseEntity.ok(ResultResponse.of(ResultCode.USER_SUBSCRIBE_SUCCESS));
    }

    @GetMapping("{user_id}/subscribes")
    public ResponseEntity<ResultResponse> getSubscribes(@PathVariable("user_id") Long user_id) {
        List<SubscribeResponse> subscribers =  userService.getSubscribers(user_id);
        return ResponseEntity.ok(ResultResponse.of(ResultCode.USER_GET_SUBSCRIBE_SUCCESS, subscribers));
    }
}
