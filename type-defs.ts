export enum ContentType {
  Paragraph = "paragraph",
  HeadingOne = "heading_1",
  HeadingTwo = "heading_2",
  HeadingThree = "heading_3",
  HeadingFour = "heading_4",
  HeadingFive = "heading_5",
  HeadingSix = "heading_6",
  BulletedList = "bulleted_list_item",
  Quote = "quote",
  Code = "code",
}

export type Content = {
  archived: boolean;
  created_by: Modified;
  created_time: string;
  has_children: boolean;
  id: string;
  last_edited_by: Modified;
  last_edited_time: string;
  object: string;
  type: ContentType;
  paragraph?: ContentObject;
  quote?: ContentObject;
  heading_1?: ContentObject;
  heading_2?: ContentObject;
  heading_3?: ContentObject;
  heading_4: ContentObject;
  heading_5?: ContentObject;
  heading_6?: ContentObject;
  bulleted_list_item?: ContentObject;
  code?: ContentObject;
};

export type ContentObject = {
  color?: string;
  text?: any[];
};

export type Modified = {
  object: string;
  id: string;
};
