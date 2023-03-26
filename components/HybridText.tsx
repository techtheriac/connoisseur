import { StyledComponent } from "@stitches/react/types/styled-component";
import { Span, Text } from "./Text";
import { styled, css } from "@stitches/react";
import { CSSProperties } from "@stitches/react/types/css-util";
import NextLink, { LinkProps } from "next/link";
import { forwardRef } from "react";

export type Options<T> = T extends StyledComponent<any, infer T> ? T : never;
export type TextOptions = Options<typeof Text>;
export type CharacterFamily = TextOptions["family"];
export type RandomizerSeed = {
  character: string;
  characterFamily: CharacterFamily;
};

export type Randomizer = (
  characters: string,
  include?: string
) => RandomizerSeed[] | undefined;

export const vowelize: Randomizer = (characters, include = "aeiou&") => {
  if (!characters) return;
  return characters.split("").map((char) => {
    return {
      character: char,
      characterFamily: include.includes(char) ? "pixel" : "sans",
    };
  });
};

export type HybrizierProps<T extends keyof JSX.IntrinsicElements> = {
  content: string;
  contentType: T;
  randomizer: Randomizer;
  include?: string;
  css?: CSSProperties;
};

export type CreateHybridNode = (props: HybrizierProps<"div">) => JSX.Element;
export const HybridNode: CreateHybridNode = ({
  content,
  contentType,
  randomizer,
  include,
  css,
}) => {
  const characters = randomizer(content, include);
  const Wrapper = styled(contentType, {
    "> *": {
      ...css,
    },
  });

  return (
    <Wrapper>
      {characters?.map(({ character, characterFamily }, index) => {
        return (
          <Span family={characterFamily} key={index}>
            {character}
          </Span>
        );
      })}
    </Wrapper>
  );
};

export type HybridizerLinkProps = HybrizierProps<"a">;
export type NextCustomLinkProps = Omit<
  LinkProps,
  "as" | "passHref" | "children"
>;
export type CustomLinkProps = HybridizerLinkProps & NextCustomLinkProps;

export const HybridLink = forwardRef<HTMLAnchorElement, CustomLinkProps>(
  function Link(
    {
      href,
      prefetch,
      replace,
      scroll,
      shallow,
      locale,
      randomizer,
      content,
      include,
      contentType,
      css,
    }: CustomLinkProps,
    ref
  ) {
    const characters = randomizer(content, include);
    const Wrapper = styled(contentType, {
      "> *": {
        ...css,
      },
    });

    return (
      <NextLink
        href={href}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
        locale={locale}
        passHref
      >
        <Wrapper ref={ref}>
          {characters?.map(({ character, characterFamily }, index) => {
            return (
              <Span family={characterFamily} key={index}>
                {character}
              </Span>
            );
          })}
        </Wrapper>
      </NextLink>
    );
  }
);
