package project.cookdoc.domain.shop.dto;

import lombok.*;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.List;

@Getter
@Builder
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ShopRegistrationRequest {
    private int user_id;
    private String name;
    private String address;
    private String phone;
    private List<String> images;
    private String detail;
    private String category;
}
