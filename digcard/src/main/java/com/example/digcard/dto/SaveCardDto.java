package com.example.digcard.dto;

import jakarta.validation.constraints.NotEmpty;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class SaveCardDto {
    @NotEmpty
    private String name;
    @NotEmpty
    private String job;
    @NotEmpty
    private String email;
    @NotEmpty
    private String author;
}
