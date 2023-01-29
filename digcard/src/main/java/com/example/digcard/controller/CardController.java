package com.example.digcard.controller;

import com.example.digcard.dto.GetCardResponseDto;
import com.example.digcard.dto.SaveCardDto;
import com.example.digcard.dto.SaveCardResponseDto;
import com.example.digcard.entity.CardEntity;
import com.example.digcard.service.CardService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/v1/card")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class CardController {
    private final CardService cardService;

    @GetMapping("/{id}")
    public GetCardResponseDto getCard(@PathVariable Integer id) {
        CardEntity card = cardService.getCardById(id);
        return new GetCardResponseDto(card);
    }

    @PostMapping("/create")
    public SaveCardResponseDto saveCard(@Valid @RequestBody SaveCardDto saveCardDto) {
        CardEntity savedCard = cardService.saveCard(saveCardDto);
        return new SaveCardResponseDto(savedCard.getId());
    }
}
