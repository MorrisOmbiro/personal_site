import React from "react";
// import Carousel from "react-bootstrap/Carousel";
import "../static/carousel.css";


const LandingImage = () => {
    const pic1 = "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80";
    return (
        <div id="home" >
            <img className="d-block w-100 custom-img" src={pic1} alt="Cover" />
        </div>
    );
};

export default LandingImage;