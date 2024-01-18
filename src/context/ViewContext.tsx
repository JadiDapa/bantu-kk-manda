import { createContext, ReactNode, useState } from "react";

type ViewContextProps = {
  view: "menu" | "user-data" | "verification";
  setView: (newView: "menu" | "user-data" | "verification") => void;
};

export const ViewContext = createContext<ViewContextProps>({
  view: "menu",
  setView: () => {},
});

export const ViewContextProvider = ({ children }: { children: ReactNode }) => {
  const [view, setView] = useState<"menu" | "user-data" | "verification">(
    "user-data"
  );

  return (
    <ViewContext.Provider value={{ view, setView }}>
      {children}
    </ViewContext.Provider>
  );
};
