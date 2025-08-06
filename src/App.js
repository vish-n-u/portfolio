import React from "react";
import NavBar from "./NavBar";
import Portfolio from "./NewUi";

function App() {
  const oldPortfolio = localStorage.getItem("oldPortFolio") === "true" ?true:false
  return (
    <>
   {oldPortfolio?<NavBar/>: <Portfolio />}  
    </>
  );
}

export default App;
