import React from "react";
import About from "./About/About";
import Footer from "./Footer/Footer";
import Popular from "./Popular/Popular";
import Slider from "./Slider/Slider";

const Home = () => {
  return (
    <div className="container-fluid">
      <Slider/>
      <Popular/>
      <About/>
      <Footer/>
    </div>
  );
};

export default Home;
