package project.cookdoc.domain.shop.entity;

import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import project.cookdoc.global.entity.BaseEntity;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Builder
@DynamicInsert
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "shop_images")
public class ShopImage extends BaseEntity {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column
    @NonNull
    private Long shop_id;

    @Column
    private String image_url;

}
