import { useState } from "react";
import SideBar from "./assets/ui/SideBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SideBar />
    </>
  );
}

export default App;
