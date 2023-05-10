import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

if (import.meta.hot) {
  import.meta.hot.on(
    "vite:beforeUpdate",
    /* eslint-disable-next-line no-console */
    () => console.clear()
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
