package project.cookdoc.domain.shop.entity;

import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import project.cookdoc.global.entity.BaseEntity;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@Builder
@Entity
@DynamicInsert
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "shops")
public class Shop extends BaseEntity {
    @Id
    @Column(name = "shop_id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column
    @NonNull
    private Long user_id;

    @Column
    @NonNull
    private String name;

    @Column
    @NonNull
    private String address;

    @Column
    @NonNull
    private String phone;

    @Column
    @NonNull
    private String detail;

    @Column
    @NonNull
    private String category;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "shop_id")
    private List<ShopImage> shop_images;
}
