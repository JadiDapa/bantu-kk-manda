import { createContext, useState } from "react";
import Menu from "./pages/Menu";
import UserData from "./pages/UserData";
import Verification from "./pages/Verification";

interface ViewContextProps {
  view: string;
  setView: React.Dispatch<React.SetStateAction<string>> | undefined;
}

const defaultValue: ViewContextProps = {
  view: "",
  setView: undefined,
};

export const ViewContext = createContext(defaultValue);

const App = () => {
  const [view, setView] = useState("menu");

  return (
    <ViewContext.Provider value={{ view, setView }}>
      {view === "menu" && <Menu />}
      {view === "user-data" && <UserData />}
      {view === "verification" && <Verification phoneNumber={"089523927152"} />}
    </ViewContext.Provider>
  );
};

export default App;
