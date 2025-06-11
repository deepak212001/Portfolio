// src/components/StarryBackground.jsx
import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const StarryBackground = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "#040404",
        },
        particles: {
          number: {
            value: 500,
          },
          color: {
            value: "#FFFFFF",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: 1,
          },
          move: {
            enable: true,
            speed: 0.3,
          },
        },
        fullScreen: {
          enable: true,
          zIndex: -1, // Peeche dikhaye
        },
      }}
    />
  );
};

export default StarryBackground;
