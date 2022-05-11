// TO-DO - Get a sorted sematic structure of blog post content before rendering
import React from "react";
import * as R from "ramda";

const Map = R.addIndex(R.map);

const BlogLink = ({ content, linkUrl }) => {
  return <a href={linkUrl}>{content}</a>;
};

const ELEMENT_TYPE_PATH = R.lensPath(["type"]);

const PARAGRAPH_CONTENT_PATH = R.lensPath([
  "paragraph",
  "text",
  0,
  "plain_text",
]);

const BULLET_LIST_ITEM_PATH = R.lensPath([
  "bulleted_list_item",
  "text",
  0,
  "plain_text",
]);

const PARAGRAPH_PATH = R.lensPath(["paragraph", "text"]);

const HEADING_CONTENT_PATH = (level) =>
  R.lensPath([`heading_${level}`, "text", 0, "plain_text"]);

const getContent = (path) => (elementObject) => R.view(path, elementObject);

const elementHasChildren = (path) => (elementObject) =>
  R.length(R.view(path, elementObject)) > 1;

const getParagraphContent = getContent(PARAGRAPH_CONTENT_PATH);
const getParagraphArray = getContent(PARAGRAPH_PATH);
const getElementType = getContent(ELEMENT_TYPE_PATH);
const paragraphHasChildren = elementHasChildren(PARAGRAPH_PATH);

const parseParagraph = (elementObject, index) => {
  if (!paragraphHasChildren(elementObject)) {
    return <p key={index}>{getParagraphContent(elementObject)}</p>;
  } else {
    const paragraphArray = getParagraphArray(elementObject);
    const paragraphChildren = Map(parsePregnantParagraph, paragraphArray);
    const PregnantParagraph = (
      <p key={index}>{Map((x) => x, paragraphChildren)}</p>
    );
    return PregnantParagraph;
  }
};

const parsePregnantParagraph = (contentObject, index) => {
  if (contentObject.href !== null) {
    return (
      <BlogLink
        key={index}
        linkUrl={contentObject.href}
        content={contentObject.plain_text}
      />
    );
  }

  return contentObject.plain_text;
};

const renderProcedure = (elementObject, index) => {
  if (getElementType(elementObject) == "paragraph") {
    return parseParagraph(elementObject, index);
  }

  if (getElementType(elementObject) == "heading_1") {
    return (
      <h1 key={index}>{getContent(HEADING_CONTENT_PATH(1))(elementObject)}</h1>
    );
  }

  if (getElementType(elementObject) == "heading_2") {
    return (
      <h2 key={index}>{getContent(HEADING_CONTENT_PATH(2))(elementObject)}</h2>
    );
  }

  if (getElementType(elementObject) == "heading_3") {
    return (
      <h3 key={index}>{getContent(HEADING_CONTENT_PATH(3))(elementObject)}</h3>
    );
  }

  if (getElementType(elementObject) == "heading_4") {
    return (
      <h4 key={index}>{getContent(HEADING_CONTENT_PATH(3))(elementObject)}</h4>
    );
  }

  if (getElementType(elementObject) == "heading_5") {
    return (
      <h5 key={index}>{getContent(HEADING_CONTENT_PATH(3))(elementObject)}</h5>
    );
  }

  if (getElementType(elementObject) == "heading_6") {
    return (
      <h6 key={index}>{getContent(HEADING_CONTENT_PATH(3))(elementObject)}</h6>
    );
  }

  if (getElementType(elementObject) == "bulleted_list_item") {
    return (
      <li key={index}>{getContent(BULLET_LIST_ITEM_PATH)(elementObject)}</li>
    );
  }
};

export const ContentRenderer = ({ postContent }) => (
  <div> {Map(renderProcedure, postContent)}</div>
);
