import React from "react";
import NavBar from "./NavBar";
import Portfolio from "./latest";

function App() {
  const oldPortfolio = localStorage.getItem("oldPortFolio") === "true" ?true:false
  return (
    <>
      <Portfolio />
    </>
  );
}

export default App;
