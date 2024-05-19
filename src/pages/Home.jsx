import React from "react";
import { Hero, Navbar, Apod, MarsRover } from "../components";
import ParticlesBackground from "../components/ParticlesBackground";

const Home = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <ParticlesBackground />
        <Navbar />

        <Hero />
      </div>

      <Apod />
      <MarsRover />

      <div className="relative z-0"></div>
    </div>
  );
};

export default Home;
