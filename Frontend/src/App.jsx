import React, { useState } from "react";
import WinesInMyCave from "./Components/WinesInMyCave/WinesInMyCave";
import "./App.css";
import { WineContext } from "../Context/WineContext";

function App() {
  const [showed, setShowed] = useState(null);

  return (
    <WineContext.Provider value={{ showed, setShowed }}>
      <WinesInMyCave />;
    </WineContext.Provider>
  );
  
}

export default App;
