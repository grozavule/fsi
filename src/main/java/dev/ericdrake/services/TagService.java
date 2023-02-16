package dev.ericdrake.services;

import dev.ericdrake.dtos.TagDto;
import jakarta.transaction.Transactional;

import java.util.Optional;

public interface TagService {
    @Transactional
    String addTag(TagDto tagDto);

    @Transactional
    Optional<TagDto> getTagById(Integer tagId);

    @Transactional
    String updateTag(TagDto tagDto);

    @Transactional
    String deleteTag(Integer tagId);
}
