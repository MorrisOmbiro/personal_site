import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Typography from "@mui/material/Typography";
import { skills } from "./skillLinks";
import { Divider, styled } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import CurrencyBitcoinOutlinedIcon from "@mui/icons-material/CurrencyBitcoinOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import Attr from "./Attr";

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
      <div>
        <>
          {activeStep === 0 && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                flexWrap: "wrap",
              }}
            >
              {skills.frontend.map((skill) => (
                <Attr skill={skill}>
                  <img
                    src={skill.imgSrc}
                    alt={skill.skillName}
                    height="40px"
                    width="40px"
                    style={{
                      marginBottom: "4px",
                    }}
                  />
                  <Typography variant="body2" color="GrayText">
                    {skill.skillName}
                  </Typography>
                </Attr>
              ))}
            </div>
          )}
          {activeStep === 1 && (
            <div
              style={{
                display: "flex",
                width: "100%",
                flexWrap: "wrap",
              }}
            >
              {skills.backend.map((skill) => (
                <Attr skill={skill}>
                  <img
                    src={skill.imgSrc}
                    alt={skill.skillName}
                    height="40px"
                    width="40px"
                    style={{ marginBottom: "4px" }}
                  />
                  <Typography variant="body2" color="GrayText">
                    {skill.skillName}
                  </Typography>
                </Attr>
              ))}
            </div>
          )}
          {activeStep === 2 && (
            <div
              style={{
                display: "flex",
                width: "100%",
                flexWrap: "wrap",
              }}
            >
              {skills.versionControl.map((skill) => (
                <Attr skill={skill}>
                  <img
                    src={skill.imgSrc}
                    alt={skill.skillName}
                    height="40px"
                    width="40px"
                    style={{ marginBottom: "4px" }}
                  />
                  <Typography variant="body2" color="GrayText">
                    {skill.skillName}
                  </Typography>
                </Attr>
              ))}
            </div>
          )}
        </>
      </div>
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
