package dev.ericdrake.entities;

import dev.ericdrake.dtos.TagDto;
import jakarta.persistence.*;

import java.util.Set;

@Entity
@Table(name = "tags")
public class Tag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer tagId;

    @Column(name = "tag")
    private String tag;

    @ManyToMany(mappedBy = "tags")
    private Set<Item> items;

    public Tag(){}

    public Tag(TagDto tagDto){
        this.tagId = tagDto.getTagId();
        this.tag = tagDto.getTag();
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
