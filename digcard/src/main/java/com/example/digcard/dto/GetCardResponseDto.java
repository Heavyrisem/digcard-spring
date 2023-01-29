package com.example.digcard.dto;

import com.example.digcard.entity.CardEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class GetCardResponseDto {
    private CardEntity card;
}
