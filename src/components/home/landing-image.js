import React from "react";
// import Carousel from "react-bootstrap/Carousel";
import Slide1 from "../images/slide.jpg";
import "../static/carousel.css";


const LandingImage = () => {
    // const pic1 = "https://images.unsplash.com/photo-1503437313881-503a91226402?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3889&q=80";
    return (
        <div id="home" >
            <img className="d-block w-100 custom-img" src={Slide1} alt="Cover" />
        </div>
    );
};

export default LandingImage;