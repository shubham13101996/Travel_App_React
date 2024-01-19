import React from "react";
import { Explore, Footer, Hero, Memories, Navbar } from "./components";
import { hero, memory, navlinks, placesAPI } from "./data/travelData";

const App = () => {
  return (
    <>
      <Navbar navlinks={navlinks} />
      <Hero hero={hero} />
      <Memories memory={memory} />
      <Explore title="Explore The Beauty of World" placesAPI={placesAPI} />
      <Footer />
    </>
  );
};

export default App;
