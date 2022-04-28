import React from "react";
import About from "./About/About";
import Footer from "./Footer/Footer";
import Popular from "./Popular/Popular";
import Slider from "./Slider/Slider";
import NavLogo from "./NavLogo/NavLogo";


const Home = () => {
  return (
    <div className="container-fluid">
      <NavLogo/>
      <Slider/>
      <Popular/>
      <About/>
      <Footer/>
    </div>
  );
};

export default Home;
