import React from "react";
import { Button, Divider, Grid, Typography, styled } from "@mui/material";
import "../static/content.css";
import githubLogo from "../images/github.png";
import linkedInLogo from "../images/linkedin.png";
import resumeLogo from "../images/business-doc.png";
import skillsLogo from "../images/skills.png";

const ContentPage: React.FC = () => {
  const paramsList = [
    {
      id: "git_logo",
      src: githubLogo,
      className: "LogoInHeader",
      desc: "GitHub is my coding playground, where you can explore my \
      projects and contributions. Check out my repositories to see my \
      open-source work and coding adventures.",
      onClick: () => window.open("https://github.com/MorrisOmbiro", "_blank"),
    },
    {
      id: "linkedin_logo",
      src: linkedInLogo,
      className: "LogoInHeader",
      desc: "On LinkedIn, you'll find my professional journey, network \
      , and achievements. Let's connect to share insights and explore \
      new opportunities together.",
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
      desc: "My resume highlights my skills, experiences, and \
       qualifications. It's a snapshot of my professional \
        background and what I bring to the table.",
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
      desc: "I have experience in a variety of programming languages \
      and frameworks, including React, React Native, Typescript, \
      Javascript ES6, REST API, GraphQL, and Java.",
      onClick: () =>
        window.open(
          "\
      https://drive.google.com/file/d/1SHkrA4buk4Mqz0f_Xd0_M8PwwSN6-k6J/view?usp=sharing",
          "_blank"
        ),
    },
  ];

  return (
    <SocialMedia>
      <Grid container spacing={4}>
        {paramsList.map((param) => (
          <Grid key={param.id} item xs={6}>
            <InfoCard size="large" variant="outlined">
              <Grid container>
                <Grid item xs={12}>
                  <Grid container direction="column" spacing={1}>
                    <Grid item>
                      <img
                        src={param.src}
                        className={param.className}
                        onClick={param.onClick}
                      />
                    </Grid>
                    <Grid item>
                      <Divider light style={{ height: "0px" }} />
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="body2"
                        align="left"
                        paragraph
                        color="gray"
                      >
                        {param.desc ?? "oh"}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </InfoCard>
          </Grid>
        ))}
      </Grid>
    </SocialMedia>
  );
};

const SocialMedia = styled("div")(({ theme }) => ({
  position: "relative",
  top: "16%",
  zIndex: 15,
  textAlign: "center",
  paddingBottom: theme.spacing(2),
}));

const InfoCard = styled(Button)(({ theme }) => ({
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
