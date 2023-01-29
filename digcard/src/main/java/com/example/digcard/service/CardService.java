package com.example.digcard.service;

import com.example.digcard.dto.SaveCardDto;
import com.example.digcard.entity.CardEntity;
import com.example.digcard.repository.CardRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class CardService {
    private final CardRepository cardRepository;

    public CardEntity getCardById(Integer id) {
        return cardRepository.findById(id).orElseThrow(() -> new RuntimeException("Card Not Found"));
    }

    public CardEntity saveCard(SaveCardDto saveCardDto) {
        return cardRepository.save(
                CardEntity.builder()
                        .name(saveCardDto.getName())
                        .job(saveCardDto.getJob())
                        .email(saveCardDto.getEmail())
                        .author(saveCardDto.getAuthor())
                        .build()
        );
    }
}
