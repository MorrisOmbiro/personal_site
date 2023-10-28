import React from "react";
// import Carousel from "react-bootstrap/Carousel";
import "../static/carousel.css";
import ParticlesController from "../ParticlesController";

const LandingImage: React.FC = () => {
  const pic1 =
    "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80";
  return (
    <div id="home" style={{ position: "relative" }}>
      <ParticlesController />
      <div style={{ width: "100%", height: "100%" }}>
        <img className="d-block w-100 custom-img" src={pic1} alt="Cover" />
      </div>
    </div>
  );
};

export default LandingImage;
