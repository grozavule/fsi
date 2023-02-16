package dev.ericdrake.services;

import dev.ericdrake.dtos.TagDto;
import dev.ericdrake.entities.Tag;
import dev.ericdrake.repositories.TagRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TagServiceImpl implements TagService {
    @Autowired
    private TagRepository tagRepository;

    @Override
    @Transactional
    public String addTag(TagDto tagDto){
        try {
            Tag tag = new Tag(tagDto);
            tagRepository.saveAndFlush(tag);
            return "The tag has been created";
        } catch(Exception e){
            return e.getMessage();
        }
    }

    @Override
    @Transactional
    public Optional<TagDto> getTagById(Integer tagId){
        Optional<Tag> tagOptional = tagRepository.findById(tagId);
        if(tagOptional.isPresent()){
            return Optional.of(new TagDto(tagOptional.get()));
        }
        return Optional.empty();
    }

    @Override
    @Transactional
    public String updateTag(TagDto tagDto){
        Optional<Tag> tagOptional = tagRepository.findById(tagDto.getTagId());
        if(tagOptional.isPresent()){
            Tag tag = tagOptional.get();
            tag.setTag(tagDto.getTag());
            return "The tag has been updated";
        }
        return "The tag provided could not be found";
    }

    @Override
    @Transactional
    public String deleteTag(Integer tagId){
        Optional<Tag> tagOptional = tagRepository.findById(tagId);
        if(tagOptional.isPresent()){
            tagRepository.delete(tagOptional.get());
            return "The tag has been deleted";
        }
        return "The tag provided could not be found";
    }
}
