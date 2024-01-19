import React from "react";
import { Footer, Hero, Navbar } from "./components";
import { hero,navlinks } from "./data/travelData";


const App = () => {
  return (
    <>
    <Navbar navlinks={navlinks}/>
    <Hero hero={hero}/>
    <Footer/>
    </>
  )
};

export default App;
