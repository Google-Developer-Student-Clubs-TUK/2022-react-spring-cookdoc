package project.cookdoc.domain.user.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import project.cookdoc.domain.shop.entity.Shop;
import project.cookdoc.global.entity.BaseEntity;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@Entity
@DynamicInsert
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "subscribers")
public class Subscriber extends BaseEntity {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column
    private LocalDate term_start;

    @Column
    private LocalDate term_finish;

    @Column
    private int total_payment;

    @ManyToOne
    @JsonManagedReference
    @JoinColumn(name = "shop_id")
    Shop shop;

    @ManyToOne
    @JsonManagedReference
    @JoinColumn(name = "user_id")
    User user;

}
