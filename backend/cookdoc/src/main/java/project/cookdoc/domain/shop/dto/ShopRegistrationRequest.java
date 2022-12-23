package project.cookdoc.domain.shop.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ShopRegistrationRequest {
    private Long user_id;
    private String name;
    private String address;
    private String phone;
    private String detail;
    private String category;
    private List<MultipartFile> images;
}
