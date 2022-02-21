package com.prasad.pizzaria.config;

import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;

import static java.util.Collections.*;

@Component
public class LongListConverter implements AttributeConverter<List<Long>, String> {
    private static final String SPLIT_CHAR = ",";
    
    @Override
    public String convertToDatabaseColumn(List<Long> longList) {
        return longList != null ?
            longList.stream().map(Object::toString).collect(Collectors.joining(SPLIT_CHAR))
            : "";
    }

    @Override
    public List<Long> convertToEntityAttribute(String string) {
        return string != null ?
            Arrays.stream(string.split(SPLIT_CHAR)).map(Long::parseLong).collect(Collectors.toList())
            : emptyList();
    }
}