import React from "react";
import { Navbar } from "../components";
import ParticlesBackground from "../components/ParticlesBackground";
import MarsRoverExplorer from "../components/MarsRoverExplorer";

const MarsExplorer = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <ParticlesBackground />
        <Navbar />
        <MarsRoverExplorer />
      </div>

      <div className="relative z-0"></div>
    </div>
  );
};

export default MarsExplorer;
