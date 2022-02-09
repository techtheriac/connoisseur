import {styled} from "@stitches/react";
import * as R from 'ramda';

const Paragraph = styled("p", {
  fontSize: "1.3rem",
});

const HeadingOne = styled("h1");

const CONTENT_TYPE_PATH = R.lensPath(["type"])
const PARAGRAPH_CONTENT_PATH = R.lensPath(["paragraph", "text", 0, "plain_text"])
const HEADING_CONTENT_PATH = (level) => R.lensPath([`heading_${level}`, "text", 0, "plain_text"])

const getElementType = (path, elementObject) => R.view(path, elementObject);
const getParagraphContent = (path, elementObject) => R.view(path, elementObject);
const getHeadingContent = (path, elementObject) => R.view(path, elementObject);

const renderProcedure = (elementObject) => {
  if(getElementType(CONTENT_TYPE_PATH, elementObject) == "paragraph") {
    return <Paragraph key={elementObject.id}>{getParagraphContent(PARAGRAPH_CONTENT_PATH, elementObject)}</Paragraph>
  }

  if(getElementType(CONTENT_TYPE_PATH, elementObject) == "heading_1") {
    return <HeadingOne key={elementObject.id}>{getHeadingContent(HEADING_CONTENT_PATH(1), elementObject)}</HeadingOne>
  }
}

export const ContentRenderer = ({postContent}) => <div> { R.map(renderProcedure, postContent) }</div>;