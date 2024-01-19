import { createContext, ReactNode, useState } from "react";

type ViewContextProps = {
  view: "menu" | "user-data" | "verification" | "order-detail";
  setView: (
    newView: "menu" | "user-data" | "verification" | "order-detail"
  ) => void;
};

export const ViewContext = createContext<ViewContextProps>({
  view: "menu",
  setView: () => {},
});

export const ViewContextProvider = ({ children }: { children: ReactNode }) => {
  const [view, setView] = useState<
    "menu" | "user-data" | "verification" | "order-detail"
  >("menu");

  return (
    <ViewContext.Provider value={{ view, setView }}>
      {children}
    </ViewContext.Provider>
  );
};
