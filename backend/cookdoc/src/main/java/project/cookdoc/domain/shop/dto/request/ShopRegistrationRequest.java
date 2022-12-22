package project.cookdoc.domain.shop.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Getter
@Builder
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
