import React, { useState } from "react";
import WinesInMyCave from "./Components/WinesInMyCave/WinesInMyCave";
import "./App.css";
import { MaCaveAVinContext } from "../Context/MaCaveAVinContext";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

function App() {
  const [wineShowed, setWineShowed] = useState(null);
  const [newRef, setNewRef] = useState(false);
  const [showWineModal, setShowWineModal] = useState(false);

  return (
    <MaCaveAVinContext.Provider
      value={{
        WineContext: { wineShowed, setWineShowed },
        NewRefContext: { newRef, setNewRef },
        WineModalContext: { showWineModal, setShowWineModal },
      }}>
      <Header />
      <WinesInMyCave />;
      <Footer />
    </MaCaveAVinContext.Provider>
  );
}

export default App;
