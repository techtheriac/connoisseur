import React from "react";

const Context = React.createContext();

export function TagsProvider({ children }) {
  const [activeTag, setActiveTag] = React.useState("");

  const handlers = React.useMemo(
    () => ({
      business: () => {
        setActiveTag("business");
      },
      poetry: () => {
        setActiveTag("poetry");
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
