package project.cookdoc.domain.user.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import project.cookdoc.domain.shop.repository.ShopRepository;
import project.cookdoc.domain.user.dto.SubscribeRequest;
import project.cookdoc.domain.user.dto.SubscribeResponse;
import project.cookdoc.domain.user.entity.Subscriber;
import project.cookdoc.domain.user.repository.SubscriberRepository;
import project.cookdoc.domain.user.repository.UserRepository;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {

    private final ShopRepository shopRepository;

    private final UserRepository userRepository;

    private final SubscriberRepository subscriberRepository;

    @Transactional
    public void registration(Long user_id, Long shop_id, SubscribeRequest request){

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

    public List<SubscribeResponse> getSubscribers(Long user_id) {
        List<SubscribeResponse> subscribers = new ArrayList<>();

        subscriberRepository.findSubscribersByUserId(user_id).forEach(
                subscriber -> subscribers.add(
                        new SubscribeResponse(
                                shopRepository.getById(subscriber.getShop().getId()),
                                subscriber.getTerm_start().toString(),
                                subscriber.getTerm_finish().toString(),
                                subscriber.getTotal_payment()
                        )
                )

        );
        return subscribers;
    }
}