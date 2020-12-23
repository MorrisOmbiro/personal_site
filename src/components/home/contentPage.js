import React from "react";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";
import { Container, Divider, Paper } from "@material-ui/core";
import Typewriter from "typewriter-effect";
import styled from "styled-components";
import { Parallax } from "react-parallax";
import Image from "react-bootstrap/Image";
import "../static/content.css";
import githubLogo from "../images/github.png";
import linkedInLogo from "../images/linkedin.png";
import twitterIcon from "../images/twitter.png";
import About from "../about/about.js";
import Skills from "../skills/skills.js";
import LandingImage from "./landing-image.js";
import Particles from "react-particles-js";
import { particles } from "../../particles.js";
import Fade from "react-reveal/Fade";

const Welcome = styled.h1`
  width: 100%;
  top: 22rem;
  position: absolute;
  z-index: 1;
  text-align: center;
  margin-top: -125px;
  strong {
    font-size: 1.25em;
  }
  div {
    color: ${(props) => "#D4B830"};
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 7px;
    .main {
      font-size: 50px;
    }
    .sub {
      font-size: 27px;
      letter-spacing: 2px;
    }
  }
`;

const img1 =
  "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80";

function ContentPage() {
  const NiceAbout = () => {
    return (
      <div id="about">
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={img1}
          bgImageAlt=""
          strength={-700}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={1000}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
    );
  };

  const SocialMediaLinks = () => {
    return (
      <div className="socialMedia">
        <Row>
          <Col xs="auto">
            <Image
              id="git_logo"
              src={githubLogo}
              className="LogoInHeader"
              onClick={(e) =>
                window.open("https://github.com/MorrisOmbiro", "_blank")
              }
            />
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
            <Image
              id="Twitter_Icon"
              src={twitterIcon}
              className="LogoInHeader"
              onClick={(e) =>
                window.open("https://twitter.com/Morris67549925", "_blank")
              }
            />
          </Col>
        </Row>
      </div>
    );
  };

  const TitleMessage = () => {
    return (
      <div>
        <Welcome>
          <div className="titleMessage">
            <div className="heading">
              <div className="main text-center mb-3">
                Hi, I am
                <br />
                <span>
                  <strong>Morris Ombiro</strong>
                </span>
              </div>
              <div className="sub">
                <Typewriter
                  options={{
                    strings: [
                      "Software Engineer",
                      "Volunteer Tutor",
                      "Tech. Enthusiast",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                  }}
                />
              </div>
            </div>
          </div>
        </Welcome>
      </div>
    );
  };

  const Languages = () => {
    return (
      <div id="languages">
        <Container maxWidth="md" style={{ position: "relative" }}>
          <Paper elevation={5}>
            <figure>
              <embed src="https://wakatime.com/share/@adeef282-e3e3-4ba9-8b4b-307ffbf53e6a/1f8b7cea-5b8d-4b7c-8169-89d97247eb3a.svg"></embed>
            </figure>
          </Paper>
        </Container>
      </div>
    );
  };

  return (
    <React.Fragment>
      <div className="App" style={{ position: "relative" }}>
        <LandingImage />
        <TitleMessage />
        <Particles className="particles particles-box" params={particles} />
        <Divider />
        <NiceAbout />
        <Divider />
        <Skills />
        <Divider />
        <Languages />
        <Divider />
        <SocialMediaLinks />
      </div>
    </React.Fragment>
  );
}

export default ContentPage;
