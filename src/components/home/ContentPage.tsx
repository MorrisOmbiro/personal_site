import React from "react";
import { Button, Divider, Grid, Typography, styled } from "@mui/material";
import "../static/content.css";
import githubLogo from "../images/github.png";
import linkedInLogo from "../images/linkedin.png";
import resumeLogo from "../images/business-doc.png";
import skillsLogo from "../images/skills.png";
import DescTypography from "./DescTypography";

const cardList = [
  {
    id: "git_logo",
    src: githubLogo,
    className: "LogoInHeader",
    desc: (
      <DescTypography>
        GitHub is my coding playground, where you can explore my projects and
        contributions. Check out my repositories to see my open-source work and
        coding adventures.
      </DescTypography>
    ),
    onClick: () => window.open("https://github.com/MorrisOmbiro", "_blank"),
  },
  {
    id: "linkedin_logo",
    src: linkedInLogo,
    className: "LogoInHeader",
    desc: (
      <DescTypography>
        On LinkedIn, you'll find my professional journey, network , and
        achievements. Let's connect to share insights and explore new
        opportunities together.
      </DescTypography>
    ),
    onClick: () =>
      window.open(
        "https://www.linkedin.com/in/morris-ombiro-a72973100/",
        "_blank"
      ),
  },
  {
    id: "Resume_Icon",
    src: resumeLogo,
    className: "LogoInHeader",
    desc: (
      <DescTypography>
        My resume highlights my skills, experiences, and qualifications. It's a
        snapshot of my professional background and what I bring to the table."
      </DescTypography>
    ),
    onClick: () =>
      window.open(
        "https://drive.google.com/file/d/1SHkrA4buk4Mqz0f_Xd0_M8PwwSN6-k6J/view?usp=sharing",
        "_blank"
      ),
  },
  {
    id: "Skills_Icon",
    src: skillsLogo,
    className: "LogoInHeader",
    desc: (
      <DescTypography>
        I have experience in a variety of programming languages and frameworks,
        including React, React Native, Typescript, Javascript ES6, REST API,
        GraphQL, and Java."
      </DescTypography>
    ),
    onClick: () =>
      window.open(
        "\
    https://drive.google.com/file/d/1SHkrA4buk4Mqz0f_Xd0_M8PwwSN6-k6J/view?usp=sharing",
        "_blank"
      ),
  },
];

const ContentPage: React.FC = () => (
  <SocialMedia>
    <Grid container spacing={4}>
      {cardList.map((param) => (
        <Grid key={param.id} item xs={6}>
          <InfoButton size="large" variant="outlined">
            <Grid container>
              <Grid item xs={12}>
                <Grid
                  container
                  direction="column"
                  spacing={1}
                  alignContent="center"
                >
                  <Grid item>
                    <Logo
                      src={param.src}
                      // className={param.className}
                      onClick={param.onClick}
                    />
                  </Grid>
                  <DescGrid item>
                    <Divider light style={{ height: "0px" }} />
                  </DescGrid>
                  <DescGrid item>{param.desc}</DescGrid>
                </Grid>
              </Grid>
            </Grid>
          </InfoButton>
        </Grid>
      ))}
    </Grid>
  </SocialMedia>
);

const Logo = styled("img")({
  justifyContent: "space-between",
  width: "45px",
  height: "45px",
  alignItems: "center",
  margin: "45px",
  "@media (max-width: 700px)": {
    width: "60px",
    height: "60px",
  },
});
const SocialMedia = styled("div")(({ theme }) => ({
  position: "relative",
  top: "12%",
  zIndex: 15,
  textAlign: "center",
  paddingBottom: theme.spacing(2),
}));

const DescGrid = styled(Grid)(({ theme }) => ({
  "@media (max-width: 700px)": {
    display: "none",
  },
}));

const InfoButton = styled(Button)(({ theme }) => ({
  display: "flex",
  height: "100%",
  width: "100%",
  textTransform: "none",
  padding: theme.spacing(2, 2, 3, 2),
  textAlign: "center",
  "&:hover": {
    backgroundColor: theme.palette.primary.contrastText,
    borderColor: theme.palette.primary.dark,
    animation: "borderAnimation 3s infinite linear",
  },
  "&:focus": {
    backgroundColor: theme.palette.primary.contrastText,
  },
  "&:active": {
    backgroundColor: theme.palette.primary.contrastText,
    animation: "borderAnimation2 3s infinite linear",
  },
  "@keyframes borderAnimation": {
    "0%": {
      borderColor: "blue",
    },
    "25%": {
      borderColor: "yellow",
    },
    "50%": {
      borderColor: "red",
    },
    "75%": {
      borderColor: "white",
    },
    "100%": {
      borderColor: "blue",
    },
  },
  "@keyframes borderAnimation2": {
    "0%": {
      borderColor: "orange",
    },
    "25%": {
      borderColor: "purple",
    },
    "50%": {
      borderColor: "cyan",
    },
    "75%": {
      borderColor: "black",
    },
    "100%": {
      borderColor: "orange",
    },
  },
  "& > *": {
    height: "100%",
    alignItems: "flex-start",
  },
}));

export default ContentPage;
