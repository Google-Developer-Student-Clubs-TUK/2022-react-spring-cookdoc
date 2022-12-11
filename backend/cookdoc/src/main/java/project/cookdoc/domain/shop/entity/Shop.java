package project.cookdoc.domain.shop.entity;

import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@Entity
@DynamicInsert
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "shops")
public class Shop {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;
    @Id
    @Column(unique = true)
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid")
    private String uuid;
    @Id
    @Column(name = "user_id")
    private int user_id;
    @Column
    private String name;
    @Column
    private String address;
    @Column
    private String phone;
    private List<String> images;
    @Column
    private String detail;
    @Column
    private String category;
    @Builder
    private Shop(int user_id, String name, String address, String phone, List<String> images, String detail, String category) {
        this.user_id = user_id;
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.images = images;
        this.detail = detail;
        this.category = category;
    }
}
