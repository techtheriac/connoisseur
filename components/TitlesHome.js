import { styled, css } from "stitches.config";
import TitleHomeItem from "./TitleHomeItem";

export default function TitlesHome() {
  const titles = [
    "Dingbat In the Ocean Of Malice",
    "Ataraxia I Lost My Mind",
    "Death and Lambs",
    "Gold Fury",
    "Roses",
    "BangDad is On Fire",
    "Container Orchestration",
    "Filter My Loads",
    "Lime and Lemonades",
    "Forsake The Night",
    "Intrinsic Layouts",
    "Chop My Hand",
    "Peace is Illusory",
  ];
  return (
    <_TitlesHome>
      {titles.map((title, index) => {
        return (
          <TitleHomeItem
            status={index % 2 == 0 ? "inactive" : "active"}
            href="#"
            key={index}
          >
            {title}
          </TitleHomeItem>
        );
      })}
    </_TitlesHome>
  );
}
const _TitlesHome = styled("div", {});
