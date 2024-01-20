import React from "react";
import {
  Advertise,
  Banner,
  Explore,
  Footer,
  Hero,
  Memories,
  Navbar,
  Newsletter,
  Pricing,
} from "./components";
import {
  bannerAPI,
  brands,
  footerAPI,
  hero,
  memory,
  navlinks,
  placesAPI,
  pricingapi,
} from "./data/travelData";

const App = () => {
  return (
    <>
      <Navbar navlinks={navlinks} />
      <Hero hero={hero} />
      <Memories memory={memory} />
      <Explore title="Explore The Beauty of World" placesAPI={placesAPI} />
      <Advertise brands={brands} />
      <Pricing pricingapi={pricingapi} />
      <Banner bannerAPI={bannerAPI} />
      <Newsletter  />
      <Footer footerAPI={footerAPI} />
    </>
  );
};

export default App;
