import React from "react";
import Activities from "../components/Activities";
import Hero from "../components/Hero";
import Facilities from "../components/Facilities";
import Teacher from "../components/Teacher";
import Classes from "../components/Classes";
import Popular from "../components/Popular";
import Footer from "../components/Footer";

function Homepage() {
  return (
    <div>
      <Hero />
      <Facilities />
      <Activities />
      <Teacher />
      <Classes />
      <Popular />
      <Footer />
    </div>
  );
}

export default Homepage;
