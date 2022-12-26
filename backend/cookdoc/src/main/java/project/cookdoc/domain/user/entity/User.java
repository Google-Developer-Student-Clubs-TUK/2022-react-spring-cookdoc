package project.cookdoc.domain.user.entity;

import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import project.cookdoc.domain.shop.entity.ShopImage;
import project.cookdoc.global.entity.BaseEntity;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@Builder
@Entity
@DynamicInsert
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "users")
public class User extends BaseEntity {
    @Id
    @Column(name = "user_id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column
    @NonNull
    private String email;

    @Column
    @NonNull
    private String name;

    @Column
    @NonNull
    private String password;

    @Column
    @NonNull
    private String address;

    @OneToMany(mappedBy = "user")
    Set<Subscriber> subscribers;
}
