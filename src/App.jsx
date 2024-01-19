import React from "react";
import { Footer, Hero, Memories, Navbar } from "./components";
import { hero,memory,navlinks } from "./data/travelData";


const App = () => {
  return (
    <>
    <Navbar navlinks={navlinks}/>
    <Hero hero={hero}/>
    <Memories memory={memory}/>
    <Footer/>
    </>
  )
};

export default App;
