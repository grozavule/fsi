package dev.ericdrake.controllers;

import dev.ericdrake.dtos.TagDto;
import dev.ericdrake.entities.Tag;
import dev.ericdrake.services.TagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/tags")
public class TagController {
    @Autowired
    private TagService tagService;

    @PostMapping("/")
    public String addTag(@RequestBody TagDto tagDto){
        try {
            String response = tagService.addTag(tagDto);
            return response;
        } catch(Exception e){
            return e.getMessage();
        }
    }

    @GetMapping("/{tagId}")
    public Optional<TagDto> getTag(@PathVariable Integer tagId){
        return tagService.getTagById(tagId);
    }

    @PutMapping("/{tagId}")
    public String updateTag(@RequestBody Tag tag, @PathVariable Integer tagId){
        Optional<TagDto> tagDtoOptional = tagService.getTagById(tagId);
        if(tagDtoOptional.isPresent()){
            TagDto tagDto = tagDtoOptional.get();
            tagDto.setTag(tag.getTag());
            String response = tagService.updateTag(tagDto);
        }
        return "The tag provided could not be found";
    }

    @DeleteMapping("/{tagId}")
    public String deleteTag(@PathVariable Integer tagId){
        tagService.deleteTag(tagId);
        return "The tag has been deleted";
    }
}
