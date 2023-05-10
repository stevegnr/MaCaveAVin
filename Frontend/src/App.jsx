import React, { useState } from "react";
import WinesInMyCave from "./Components/WinesInMyCave/WinesInMyCave";
import "./App.css";
import { MaCaveAVinContext } from "../Context/MaCaveAVinContext";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

function App() {
  const [showed, setShowed] = useState(null);
  const [newRef, setNewRef] = useState(false);

  return (
    <MaCaveAVinContext.Provider
      value={{
        WineContext: { showed, setShowed },
        NewRefContext: { newRef, setNewRef },
      }}>
      <Header />
      <WinesInMyCave />;
      <Footer />
    </MaCaveAVinContext.Provider>
  );
}

export default App;
