import React from "react";
import { Button, Divider, Grid, IconButton, styled } from "@mui/material";
import githubLogo from "../images/github.png";
import linkedInLogo from "../images/linkedin.png";
import resumeLogo from "../images/business-doc.png";
import skillsLogo from "../images/skills.png";
import DescTypography from "./DescTypography";
import SkillsCard from "./SkillsCard";
import { OpenInNew } from "@mui/icons-material";

const cardList = [
  {
    id: "github",
    src: githubLogo,
    className: "LogoInHeader",
    desc: (
      <DescTypography>
        GitHub is my coding playground, where you can explore my projects and
        contributions. Check out my repositories to see my open-source work and
        coding adventures.
      </DescTypography>
    ),
    linkUrl: "https://github.com/MorrisOmbiro",
  },
  {
    id: "linkedin",
    src: linkedInLogo,
    className: "LogoInHeader",
    desc: (
      <DescTypography>
        On LinkedIn, you'll find my professional journey, network, and
        achievements. Let's connect to share insights and explore new
        opportunities together.
      </DescTypography>
    ),
    linkUrl: "https://www.linkedin.com/in/morris-ombiro-a72973100/",
  },
  {
    id: "resume",
    src: resumeLogo,
    className: "LogoInHeader",
    desc: (
      <DescTypography>
        My resume highlights my skills, experiences, and qualifications. It's a
        snapshot of my professional background and what I bring to the table.
      </DescTypography>
    ),
    linkUrl:
      "https://drive.google.com/file/d/1WomHEJAp8qKww0mxNgEIzik_XrBfai0i/view?usp=sharing",
  },
  {
    id: "skills",
    src: skillsLogo,
    className: "LogoInHeader",
    desc: (
      <DescTypography>
        I have experience in a variety of programming languages and frameworks,
        including React, React Native, Typescript, Javascript ES6, REST API,
        GraphQL, and Java.
      </DescTypography>
    ),
  },
];

const ContentPage: React.FC = () => {
  const [cardStatus, setCardStatus] = React.useState<boolean>(false);
  const handleCardClick =
    (
      url?: string,
      cardStatus: boolean = false,
      setCardStatus?: (status: boolean) => void
    ) =>
    () => {
      if (url) {
        window.open(url, "_blank");
      } else {
        setCardStatus?.(!cardStatus);
      }
    };

  return (
    <SocialMedia>
      <Grid container spacing={4}>
        {cardList.map((param) => (
          <Grid key={param.id} item xs={6} lg={3}>
            <InfoButton
              size="large"
              variant="outlined"
              onClick={handleCardClick(
                param.linkUrl,
                cardStatus,
                setCardStatus
              )}
              disableFocusRipple
            >
              <Grid container direction="column" xs={12} lg={12} wrap="nowrap">
                <Grid item>
                  <Logo
                    src={param.src}
                    onClick={handleCardClick(
                      param.linkUrl,
                      cardStatus,
                      setCardStatus
                    )}
                  />
                </Grid>
                <Grid item>
                  <IconButton
                    onClick={handleCardClick()}
                    sx={{ paddingBottom: 0 }}
                  >
                    {param.id !== "skills" && (
                      <OpenInNew fontSize="small" color="disabled" />
                    )}
                  </IconButton>
                </Grid>
                <DescGrid>
                  <Divider style={{ marginBottom: "8px", marginTop: "8px" }} />
                  {param.desc}
                </DescGrid>
              </Grid>
            </InfoButton>
          </Grid>
        ))}
      </Grid>
      <SkillsCard open={cardStatus} setOpen={setCardStatus} />
    </SocialMedia>
  );
};

const Logo = styled("img")({
  width: "45px",
  height: "45px",
  alignItems: "center",
  marginTop: "45px",
  marginBottom: "45px",
  "@media (max-width: 700px)": {
    width: "60px",
    height: "60px",
    alignItems: "center",
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
  height: "100%",
  textTransform: "none",
  padding: theme.spacing(2, 2, 3, 2),
  borderWidth: "1px",
  borderColor: "gray",
  "&:hover": {
    animation: "borderAnimation 3s infinite linear",
  },
  "&:focus": {
    backgroundColor: theme.palette.error.light,
    borderWidth: "1px",
    "& h6": {
      color: "white",
    },
  },
  "&:active": {
    borderWidth: "1px",
  },
  "@keyframes borderAnimation": {
    "0%": {
      borderColor: theme.palette.error.light,
    },
    "25%": {
      borderColor: theme.palette.warning.light,
    },
    "50%": {
      borderColor: theme.palette.success.light,
    },
    "75%": {
      borderColor: theme.palette.info.light,
    },
    "100%": {
      borderColor: theme.palette.secondary.light,
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
      borderColor: "black",
    },
    "75%": {
      borderColor: "orange",
    },
    "100%": {
      borderColor: "maroon",
    },
  },
  "& > *": {
    height: "100%",
  },
}));

export default ContentPage;
