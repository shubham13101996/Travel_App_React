import React from "react";
import { Footer, Hero, Navbar } from "./components";
import { hero } from "./data/travelData";


const App = () => {
  return (
    <>
    <Navbar/>
    <Hero hero={hero}/>
    <Footer/>
    </>
  )
};

export default App;
