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

const mainAbout = {
  marginTop: 0,
};

const About = () => {
  return (
    <div id="about" style={mainAbout}>
      <div className="about">
        <h3 style={{ color: "#232323", textAlign: "center" }}>
          About M<span style={{ color: "red" }}>e</span>
        </h3>

        <Container fluid="md">
          <Row className="align-items-center">
            <Col>
              <Row className="justify-content-center rounded">
                <Image
                  className="profile justify-content-end"
                  alt="profile"
                  src={Profile}
                  thumbnail
                  fluid
                />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row
                className="align-items-start p-2 my-details rounded"
                style={{
                  color: "#50A4AB",
                  fontFamily: "monospace",
                  fontWeight: "normal",
                }}
              >
                Hi there! I am{" "}
                <strong style={{ fontWeight: "bold" }}>
                  &nbsp;Morris Ombiro
                </strong>
                <br />
                As a Software Engineer with extensive technical expertise in
                various programming languages and frameworks, I approach my work
                with a meticulous attitude and provide comprehensive
                documentation. My skill set covers front-end development using
                React as a framework, and I am proficient in Typescript,
                Javascript ES6, REST API, and GraphQL. Additionally, I excel in
                mobile development, using React Native for both iOS and Android,
                as well as Java for Android app development.
                <br />
                <br />I graduated from the University of Minnesota with a degree
                in computer engineering, focusing on Operating Systems,
                Electronics, and Algorithms and Data Structures.
                <br />
                <br />I enjoy mountain biking, casual gaming, taking road trips
                (I've done a 30 hour road trip from MN to CA), and watching
                everything on Netflix.
                <Col className="d-flex justify-content-center flex-nowrap">
                  <div>
                    <Image
                      id="resume"
                      src={resumeLogo}
                      className="LogoInHeader"
                      onClick={(e) =>
                        window.open(
                          "https://drive.google.com/file/d/1SHkrA4buk4Mqz0f_Xd0_M8PwwSN6-k6J/view?usp=sharing",
                          "_blank"
                        )
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
