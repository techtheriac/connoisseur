import { StyledComponent } from "@stitches/react/types/styled-component";
import { Span, Text } from "./Text";
import { styled, css } from "@stitches/react";
import { CSSProperties } from "@stitches/react/types/css-util";

export type Options<T> = T extends StyledComponent<any, infer T> ? T : never;
export type TextOptions = Options<typeof Text>;
export type CharacterFamily = TextOptions["family"];
export type HybridizerWrapper =
  | "a"
  | "p"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";

export type RandomizerSeed = {
  character: string;
  characterFamily: CharacterFamily;
};

export type Randomizer = (
  characters: string,
  seed?: string
) => RandomizerSeed[];
export const vowelize: Randomizer = (characters, seed = "aeiou&") => {
  return characters.split("").map((char) => {
    return {
      character: char,
      characterFamily: seed.includes(char) ? "pixel" : "sans",
    };
  });
};

type HybrizierProps = {
  textContent: string;
  contentType: HybridizerWrapper;
  randomizer: Randomizer;
  seed?: string;
  css?: CSSProperties;
};

export type CreateHybridNode = (props: HybrizierProps) => JSX.Element;

export const HybridText: CreateHybridNode = ({
  textContent,
  contentType,
  randomizer,
  seed,
  css,
}) => {
  const characters = randomizer(textContent, seed);
  const Wrapper = styled(contentType, {
    "> *": {
      ...css,
    },
  });

  return (
    <Wrapper>
      {characters.map(({ character, characterFamily }, index) => {
        return (
          <Span family={characterFamily} key={index}>
            {character}
          </Span>
        );
      })}
    </Wrapper>
  );
};
