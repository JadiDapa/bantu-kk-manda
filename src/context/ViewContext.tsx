import { createContext, ReactNode, useState } from "react";

interface ViewContextProps {
  view: string;
  setView: React.Dispatch<React.SetStateAction<string>>;
}

export const ViewContext = createContext<ViewContextProps | undefined>(
  undefined
);

export const ViewContextProvider = ({ children }: { children: ReactNode }) => {
  const [view, setView] = useState("menu");

  return (
    <ViewContext.Provider value={{ view, setView }}>
      {children}
    </ViewContext.Provider>
  );
};
