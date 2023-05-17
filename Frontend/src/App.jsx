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
  const [editModal, setEditModal] = useState(false);
  const [search, setSearch] = useState(null);
  const [colorFilter, setColorFilter] = useState('all')

  return (
    <MaCaveAVinContext.Provider
      value={{
        WineContext: { wineShowed, setWineShowed },
        NewRefContext: { newRef, setNewRef },
        WineModalContext: { showWineModal, setShowWineModal },
        EditModalContext: { editModal, setEditModal },
        SearchContext: { search, setSearch },
        ColorFilterContext: {colorFilter, setColorFilter}
      }}>
      <Header />
      <WinesInMyCave />;
      <Footer />
    </MaCaveAVinContext.Provider>
  );
}

export default App;
