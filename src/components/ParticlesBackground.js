import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: {
          color: "#0A0B0E",
        },
        particles: {
          number: {
            value: 70,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#6c82ff",
          },
          links: {
            enable: true,
            distance: 150,
            color: "#6c82ff",
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.3,
            direction: "none",
            outModes: {
              default: "out",
            },
          },
          opacity: {
            value: 0.6,
            random: false,
          },
          size: {
            value: 3.5,
            random: { enable: true, minimumValue: 1.5 },
          },
          shape: {
            type: "circle",
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab", // можно "repulse" если хочешь, но "grab" эстетичнее
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.4,
              },
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;