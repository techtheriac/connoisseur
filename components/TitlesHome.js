import { styled, css } from "stitches.config";
import TitleHomeItem from "./TitleHomeItem";
import React from "react";
import { useTagsContext } from "./TagsProvider";
const parseUrl = (tags, slug) => {
  return tags.includes("poetry") ? `/poetry/${slug}` : `/musings/${slug}`;
};

// Hold an array that filters out certain tags onclick
// If the array contains tags that matches the tags of a cetain `TitleHomeItem`
// Let the item be visible

const handleVisibilityToggle = (itemTags, selectedTag) => {
  return itemTags.includes(selectedTag) ? "active" : "inactive";
};

export default function TitlesHome({ posts }) {
  const [selectedTag, handlers] = useTagsContext();
  return (
    <>
      {posts.map((post, index) => {
        return (
          <TitleHomeItem
            status={handleVisibilityToggle(post.tags, selectedTag)}
            href={parseUrl(post.tags, post.slug)}
            key={index}
          >
            {post.title}
          </TitleHomeItem>
        );
      })}
    </>
  );
}
