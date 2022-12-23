package project.cookdoc.domain.user.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import project.cookdoc.domain.shop.dto.ShopRegistrationRequest;
import project.cookdoc.domain.shop.entity.Shop;
import project.cookdoc.domain.shop.entity.ShopImage;
import project.cookdoc.domain.shop.mapper.ShopImageMapper;
import project.cookdoc.domain.shop.mapper.ShopMapper;
import project.cookdoc.domain.shop.repository.ShopImageRepository;
import project.cookdoc.domain.shop.repository.ShopRepository;
import project.cookdoc.domain.user.dto.SubscribeRequest;
import project.cookdoc.domain.user.entity.Subscriber;
import project.cookdoc.domain.user.entity.User;
import project.cookdoc.domain.user.repository.SubscriberRepository;
import project.cookdoc.domain.user.repository.UserRepository;
import project.cookdoc.s3.util.S3Manager;

import java.io.IOException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {

    private final ShopRepository shopRepository;

    private final UserRepository userRepository;

    private final SubscriberRepository subscriberRepository;

    @Transactional
    public void subscribe(Long user_id, Long shop_id, SubscribeRequest request){

        // 1. 구독 일 계산
        int term = request.getTerm(); // 구독일
        LocalDate term_start = LocalDate.now(); // 구독 시작일
        LocalDate term_finish = term_start.plusDays(term);

        // 2. 구독 정보 등록
        Subscriber subscriber = new Subscriber();
        subscriber.setUser(userRepository.getById(user_id));
        subscriber.setShop(shopRepository.getById(shop_id));
        subscriber.setTerm_start(term_start);
        subscriber.setTerm_finish(term_finish);
        subscriber.setTotal_payment(request.getTotal_payment());

        subscriberRepository.save(subscriber);
    }
}