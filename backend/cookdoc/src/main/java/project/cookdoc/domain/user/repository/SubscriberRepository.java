package project.cookdoc.domain.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import project.cookdoc.domain.user.entity.Subscriber;

import java.util.List;

public interface SubscriberRepository extends JpaRepository<Subscriber, Long> {
    @Query(value = "select * from subscribers where user_id  = ?", nativeQuery = true)
    List<Subscriber> findSubscribersByUserId(@Param(value = "user_id") Long user_id);
}