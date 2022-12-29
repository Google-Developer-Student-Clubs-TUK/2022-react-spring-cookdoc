package project.cookdoc.domain.user.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.joda.time.LocalDate;


@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SubscribeResponse {
    private Long shop_id;
    private String term_start;
    private String term_finish;
    private int total_payment;
}
