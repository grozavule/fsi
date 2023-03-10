package dev.ericdrake.dtos;

import dev.ericdrake.entities.Tag;

import java.io.Serial;
import java.io.Serializable;

public class TagDto implements Serializable {
    private Integer tagId;
    private String tag;

    public TagDto(){}

    public TagDto(Tag tag){
        this.tagId = tag.getTagId();
        this.tag = tag.getTag();
    }

    public Integer getTagId() {
        return tagId;
    }

    public void setTagId(Integer tagId) {
        this.tagId = tagId;
    }

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }
}
