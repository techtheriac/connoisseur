import { styled, css } from "stitches.config";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import Text from "@/components/Text";

const SCROLLBAR_SIZE = 10;

const StyledScrollArea = styled(ScrollAreaPrimitive.Root, {
  width: "auto",
  height: "90vh",
  overflow: "hidden",
  length: 0,
});

const StyledViewport = styled(ScrollAreaPrimitive.Viewport, {
  width: "100%",
  height: "100%",
  length: 0,
});

const StyledScrollbar = styled(ScrollAreaPrimitive.Scrollbar, {
  display: "flex",
  // ensures no selection
  userSelect: "none",
  // disable browser handling of all panning and zooming gestures on touch devices
  touchAction: "none",
  padding: 2,
  background: "transparent",
  transition: "background 160ms ease-out",
  "&:hover": { background: "transparent" },
  '&[data-orientation="vertical"]': { width: SCROLLBAR_SIZE },
  '&[data-orientation="horizontal"]': {
    flexDirection: "column",
    height: SCROLLBAR_SIZE,
  },
  length: 0,
});

const StyledThumb = styled(ScrollAreaPrimitive.Thumb, {
  flex: 1,
  background: "transparent",
  borderRadius: SCROLLBAR_SIZE,
  // increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    height: "100%",
    minWidth: 44,
    minHeight: 44,
  },
  length: 0,
});

const Box = styled("div", {
  padding: "30px",
  length: 0,
});

type GardenScrollprop = {
  heading: string;
  titles: string[];
};

export const GardenScroll = ({ heading, titles }: GardenScrollprop) => {
  return (
    <div>
      <h2>{heading}</h2>
      <StyledScrollArea>
        <StyledViewport>
          <Box>
            {titles.map((title, index) => (
              <Text key={index}>{title}</Text>
            ))}
          </Box>
        </StyledViewport>

        <StyledScrollbar orientation="vertical">
          <StyledThumb />
        </StyledScrollbar>
        <StyledScrollbar orientation="horizontal">
          <StyledThumb />
        </StyledScrollbar>
      </StyledScrollArea>
    </div>
  );
};
