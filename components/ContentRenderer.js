// TO-DO - Get a sorted sematic structure of blog post content before rendering
import React, { useEffect } from "react";
import { styled } from "@stitches/react";
import * as R from "ramda";

const Map = R.addIndex(R.map);

const Paragraph = styled("p", {
  fontSize: "1.2rem",
  marginTop: "20px",
});

const BlogLink = ({ content, linkUrl }) => {
  useEffect(() => {
    console.log(content, linkUrl);
  });

  return <a href={linkUrl}>{content}</a>;
};
const BlogContentBox = styled("div");
const HeadingOne = styled("h1");
const HeadingTwo = styled("h2");
const HeadingThree = styled("h3");
const HeadingFour = styled("h4");
const HeadingFive = styled("h5");
const HeadingSix = styled("h6");

const ELEMENT_TYPE_PATH = R.lensPath(["type"]);
const PARAGRAPH_CONTENT_PATH = R.lensPath([
  "paragraph",
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
    return (
      <Paragraph key={index}>{getParagraphContent(elementObject)}</Paragraph>
    );
  } else {
    const paragraphArray = getParagraphArray(elementObject);
    const paragraphChildren = Map(parsePregnantParagraph, paragraphArray);
    const PregnantParagraph = (
      <Paragraph>{Map((x) => x, paragraphChildren)}</Paragraph>
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
      <HeadingOne key={index}>
        {getContent(HEADING_CONTENT_PATH(1))(elementObject)}
      </HeadingOne>
    );
  }

  if (getElementType(elementObject) == "heading_2") {
    return (
      <HeadingTwo key={index}>
        {getContent(HEADING_CONTENT_PATH(2))(elementObject)}
      </HeadingTwo>
    );
  }

  if (getElementType(elementObject) == "heading_3") {
    return (
      <HeadingTwo key={index}>
        {getContent(HEADING_CONTENT_PATH(3))(elementObject)}
      </HeadingTwo>
    );
  }
};

export const ContentRenderer = ({ postContent }) => (
  <BlogContentBox> {Map(renderProcedure, postContent)}</BlogContentBox>
);
