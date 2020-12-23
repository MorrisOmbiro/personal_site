import React from "react";
// import Carousel from "react-bootstrap/Carousel";
import Slide1 from "../images/slide1.webp";
import "../static/carousel.css";


const LandingImage = () => {
    return (
        <div id="home" >
            <img className="d-block w-100 custom-img" src={Slide1} alt="Cover" />
        </div>
    );
};

export default LandingImage;