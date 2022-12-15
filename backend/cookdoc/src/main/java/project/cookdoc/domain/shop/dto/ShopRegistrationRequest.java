package project.cookdoc.domain.shop.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ShopRegistrationRequest {
    private Long user_id;
    private String name;
    private String address;
    private String phone;
    private String detail;
    private String category;
}
