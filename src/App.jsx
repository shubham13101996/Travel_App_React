import React from "react";
import {
  Advertise,
  Explore,
  Footer,
  Hero,
  Memories,
  Navbar,
  Pricing,
} from "./components";
import { brands, hero, memory, navlinks, placesAPI, pricingapi } from "./data/travelData";

const App = () => {
  return (
    <>
      <Navbar navlinks={navlinks} />
      <Hero hero={hero} />
      <Memories memory={memory} />
      <Explore title="Explore The Beauty of World" placesAPI={placesAPI} />
      <Advertise brands={brands} />
      <Pricing pricingapi={pricingapi} />
      <Footer />
    </>
  );
};

export default App;
