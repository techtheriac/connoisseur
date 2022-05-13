import React from "react";
import Animations from "@/helpers/Events";
import { useIsomorphicLayoutEffect } from "@/helpers/DOM";
import { useRouter } from "next/router";

const Context = React.createContext();

export function TagsProvider({ children }) {
  const [activeTag, setActiveTag] = React.useState("");

  // Initialize a ref that will be set to the animation singleton instance
  const animationHandler = React.useRef(null);
  const containerElement = React.useRef(null);
  React.useEffect(() => {
    containerElement.current = document.querySelector("#layout");
    const animations = new Animations(containerElement.current);
    animations.registerEvents();

    // set to the `null` animationHandlerRef the animation singleton in pageLoad
    animationHandler.current = animations;
  }, [children]);

  const handlers = React.useMemo(
    () => ({
      business: () => {
        setActiveTag("business");
      },
      poetry: () => {
        setActiveTag("poetry");
      },

      // Alias PageFade event emitter
      fadeLayout: (route) => {
        animationHandler.current.emit("fadePageTransition", route);
      },
    }),
    []
  );

  return (
    <Context.Provider value={[activeTag, handlers]}>
      {children}
    </Context.Provider>
  );
}

export const useTagsContext = () => React.useContext(Context);
