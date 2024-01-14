import { createContext, useState } from "react";
import Menu from "./pages/Menu";
import UserData from "./pages/UserData";
import Verification from "./pages/Verification";

export const ViewContext = createContext();

const App = () => {
  const [view, setView] = useState("menu");

  return (
    <ViewContext.Provider value={{ view, setView }}>
      {view === "menu" && <Menu />}
      {view === "user-data" && <UserData />}
      {view === "verification" && <Verification />}
    </ViewContext.Provider>
  );
};

export default App;
