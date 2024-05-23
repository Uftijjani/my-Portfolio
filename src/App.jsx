import { useState } from "react";
import NavBar from "./Component/NavBar";
// import Landing from "./Component/Landing";
import Home from "./Component/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Home />
      {/* <Landing /> */}
    </>
  );
}

export default App;
