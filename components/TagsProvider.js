import React from "react";
import Animations from "@/helpers/Events";
import { useIsomorphicLayoutEffect } from "@/helpers/DOM";

const Context = React.createContext();

export function TagsProvider({ children }) {
  const [activeTag, setActiveTag] = React.useState("");
  const animationHandler = React.useRef(null);

  useIsomorphicLayoutEffect(() => {
    const currentEL = document.querySelector("#layout");

    const animations = new Animations(currentEL);
    animations.registerEvents();

    animationHandler.current = animations;
  });

  const handlers = React.useMemo(
    () => ({
      business: () => {
        setActiveTag("business");
      },
      poetry: () => {
        setActiveTag("poetry");
      },
      fadeLayout: () => {
        animationHandler.current.emit("fadeLayout");
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
