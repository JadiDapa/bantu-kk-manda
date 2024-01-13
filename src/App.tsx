import { useState } from "react";
import Menu from "./pages/Menu";
import UserData from "./pages/UserData";
import Verification from "./pages/Verification";

const App = () => {
  const [view] = useState("verification");
  return (
    <div className="">
      {view === "menu" && <Menu />}
      {view === "user-data" && <UserData />}
      {view === "verification" && <Verification />}
    </div>
  );
};

export default App;
