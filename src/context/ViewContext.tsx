import { createContext, useState } from "react";

export const ViewContext = createContext();

export const ViewContextProvider = ({ children }) => {
  const [view, setView] = useState("menu");

  return (
    <ViewContext.Provider value={{ view, setView }}>
      {children}
    </ViewContext.Provider>
  );
};
