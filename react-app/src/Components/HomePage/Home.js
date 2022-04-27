import React from "react";
import Menu from "../Menu/Menu";
import About from "./About/About";
import Footer from "./Footer/Footer";
import Popular from "./Popular/Popular";
import Slider from "./Slider/Slider";
import Nav_and_logo from "./Nav_and_logo/Nav_and_logo";


const Home = () => {
  return (
    <div className="container-fluid">
      <Nav_and_logo/>
      <Slider/>
      <Popular/>
      <About/>
      <Footer/>
    </div>
  );
};

export default Home;
