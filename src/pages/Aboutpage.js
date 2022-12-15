import React from "react";
import AboutBanner from "../components/AboutBanner";
import Activities from "../components/Activities";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Popular from "../components/Popular";
import Teacher from "../components/Teacher";

function Aboutpage() {
  return (
    <div>
      <Header />
      <AboutBanner />
      <Activities />
      <Teacher />
      <Popular />
      <Footer />
    </div>
  );
}

export default Aboutpage;
