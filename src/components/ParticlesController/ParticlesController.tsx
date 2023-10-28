import React from "react";
import Particles from "react-particles-js";

const ParticlesController: React.FC = () => {
  const [particleValue, setParticleValue] = React.useState(100);
  const [nodeColor, setNodeColor] = React.useState("#6AC9D5");
  const [valueArea, setValueArea] = React.useState(1500);
  const [edgeColor, setEdgeColor] = React.useState("#ff0000");

  const handleParticleValueChange = (event) => {
    setParticleValue(event.target.value);
  };

  const handleNodeColorChange = (event) => {
    setNodeColor(event.target.value);
  };

  const handleValueAreaChange = (event) => {
    if (event.target.value < 500) {
      return;
    }
    setValueArea(event.target.value);
  };

  const handleEdgeColorChange = (event) => {
    setEdgeColor(event.target.value);
  };

  const particles = {
    particles: {
      number: {
        value: particleValue,
        density: {
          enable: true,
          value_area: valueArea,
        },
      },
      color: {
        value: nodeColor,
      },
      shape: {
        type: "polygon",
        stroke: {
          width: 0,
          color: "#000",
        },
        polygon: {
          nb_sides: 10,
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 20,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: edgeColor,
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 10,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  };

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 40,
          left: 0,
          zIndex: "100",
          width: "300px",
          height: "100%",
          padding: "20px",
          margin: "20px",
        }}
      >
        <div>
          <label>Particle Value</label>
          <input
            type="number"
            value={particleValue}
            onChange={handleParticleValueChange}
          />
        </div>
        <div>
          <label>Node Color</label>
          <input
            type="color"
            value={nodeColor}
            onChange={handleNodeColorChange}
          />
        </div>
        <div>
          <label>Value Area</label>
          <input
            type="number"
            value={valueArea}
            onChange={handleValueAreaChange}
            step="100"
          />
        </div>
        <div>
          <label>Edge Color</label>
          <input
            type="color"
            value={edgeColor}
            onChange={handleEdgeColorChange}
          />
        </div>
      </div>
      <Particles className="particles particles-box" params={particles} />
    </>
  );
};

export default ParticlesController;
