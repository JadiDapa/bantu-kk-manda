import { useContext } from "react";
import Menu from "./pages/Menu";
import UserData from "./pages/UserData";
import Verification from "./pages/Verification";
import { ViewContext } from "./context/ViewContext";

const App = () => {
  const { view } = useContext(ViewContext) ?? { view: "menu" };

  return (
    <>
      {view === "menu" && <Menu />}
      {view === "user-data" && <UserData />}
      {view === "verification" && <Verification />}
    </>
  );
};

export default App;
