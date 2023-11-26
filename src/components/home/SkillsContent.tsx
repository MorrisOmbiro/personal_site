import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import { skills } from "./skillLinks";
import { Grid, styled } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import CurrencyBitcoinOutlinedIcon from "@mui/icons-material/CurrencyBitcoinOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import Skill from "./Skill";

const steps = ["Frontend", "Backend", "Version Control"];
const icons = [
  <FacebookOutlinedIcon />,
  <CurrencyBitcoinOutlinedIcon />,
  <GitHubIcon />,
];

const SkillsContent: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ width: "100%" }} style={{ padding: "16px" }}>
      <div style={{ marginBottom: "32px" }}>
        <Stepper nonLinear activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => (
            <Step key={label}>
              <ZestiestStepper
                onClick={handleStep(index)}
                sx={{ margin: 0 }}
                icon={icons[index]}
                autoFocus={index === 0}
              >
                {label}
              </ZestiestStepper>
            </Step>
          ))}
        </Stepper>
      </div>
      <>
        {activeStep === 0 && (
          <Grid container xs={12} md={12} lg={12} rowSpacing={5}>
            {skills.frontend.map((skill) => (
              <Skill key={skill.link} skill={skill} />
            ))}
          </Grid>
        )}
        {activeStep === 1 && (
          <Grid container xs={12} md={12} lg={12} rowSpacing={5}>
            {skills.backend.map((skill) => (
              <Skill key={skill.link} skill={skill} />
            ))}
          </Grid>
        )}
        {activeStep === 2 && (
          <Grid container xs={12} md={12} lg={12} rowSpacing={5}>
            {skills.versionControl.map((skill) => (
              <Skill key={skill.link} skill={skill} />
            ))}
          </Grid>
        )}
      </>
    </Box>
  );
};

const ZestiestStepper = styled(StepButton)(({ theme }) => ({
  "&:focus": {
    backgroundColor: "transparent",
    color: theme.palette.error.light,
    "& h6": {
      color: "white",
    },
  },
}));

export default SkillsContent;
