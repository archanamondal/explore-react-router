import React from "react";
import Particle from "react-particles-js";
import particlesConfig from "../assets/particlesjsConfig.json";

function Home() {
  return (
    <div>
      <Particle params={particlesConfig} />
    </div>
  );
}

export default Home;
