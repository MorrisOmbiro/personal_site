import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.css";
import Profile from "../images/me.jpg";
import Image from "react-bootstrap/Image";
import githubLogo from "../images/github.png";
import resumeLogo from "../images/resume.png";
import linkedInLogo from "../images/linkedin.png";

const About = () => {
    return (
        <div id="about" >
            <div className="about">
                <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
                <Container>
                    <Row className="pt-3 pb-5 align-items-center">
                        <Col xs={12} md={6}>
                            <Row className="justify-content-center mb-2 mr-2 rounded">
                                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
                            </Row>
                        </Col>
                        <Col xs={12} md={6}>
                            <Row className="align-items-start p-2 my-details rounded">
                                Hi there! I am <strong>&nbsp;Morris Ombiro</strong>
                                <br />Born and raised in Kenya until my transfer to Minneapolis, MN for studies.
                                In May 2020 I graduate from the University of Minnesota with a degree in Computer Engineering.
                                I mainly focused on Operating Systems, Electronics, and Algorithms and Data structures. <br />
                                Professionally, I have a love for web technology and I am constantly trying to better myself
                                as a full-stack engineer. I have a wide range of technology knowledge ranging from Java, C#, C/C++,
                                Python, and Javascript. I am currently focusing on MongoDB, Express.js, React.js, Node.js (MERN) as
                                my beloved stack.
                                I offer attention to detail in all of my work and aim to always read
                                the documentation :) <br />
                                Besides work, I enjoy helping kids develop an interest in Math by volunteering part time in Math
                                centers in my community. Let's work together!
                                <br />

                                <Col className="d-flex justify-content-center flex-nowrap">
                                    <div>
                                        <Image
                                            id="resume"
                                            src={resumeLogo}
                                            className="LogoInHeader"
                                            onClick={(e) =>
                                                window.open("https://drive.google.com/file/d/1duE0ADTlukDkK3pcZUtNRObaXNnyDZcc/view?usp=sharing", "_blank")
                                            }
                                        />
                                    </div>
                                    <div>
                                        <Image
                                            id="git_logo"
                                            src={githubLogo}
                                            className="LogoInHeader"
                                            onClick={(e) =>
                                                window.open("https://github.com/MorrisOmbiro", "_blank")
                                            }
                                        />
                                    </div>
                                    <div>

                                        <Image
                                            id="linkedin_logo"
                                            src={linkedInLogo}
                                            className="LogoInHeader"
                                            onClick={(e) =>
                                                window.open(
                                                    "https://www.linkedin.com/in/morris-ombiro-a72973100/",
                                                    "_blank"
                                                )
                                            }
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default About;