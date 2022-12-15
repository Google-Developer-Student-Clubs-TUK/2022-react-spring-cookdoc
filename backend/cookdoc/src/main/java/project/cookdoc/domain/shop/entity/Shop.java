package project.cookdoc.domain.shop.entity;

import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import project.cookdoc.global.entity.BaseEntity;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@Entity
@DynamicInsert
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "shops")
public class Shop extends BaseEntity {
    @Id
    @Column(name = "shop_id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    /*@Id
    @Column(unique = true, name = "shop_id")
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid")
    private String uuid;*/

    @Column
    private Long user_id;

    @Column
    private String name;

    @Column
    private String address;

    @Column
    private String phone;

    @Column
    private String detail;

    @Column
    private String category;

    @OneToMany
    @JoinColumn(name = "shop_id")
    private List<ShopImage> shop_images;
    @Builder
    public Shop(Long user_id, String name, String address, String phone, String detail, String category) {
        this.user_id = user_id;
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.detail = detail;
        this.category = category;
    }
}
