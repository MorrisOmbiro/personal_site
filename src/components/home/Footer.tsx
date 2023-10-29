import React from "react";
import { Typography } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

const Footer: React.FC = () => {
  return (
    <Label>
      <StyledTypography variant="body2" color="textSecondary" align="center">
        <span className="move">©</span> {new Date().getFullYear()}
        <span className="wiggle">.</span> Syntax Light, Algorithm Tight
      </StyledTypography>
    </Label>
  );
};

const Label = styled("div")({
  position: "relative",
  zIndex: 15,
  textAlign: "center",
  top: "18%",
});

const StyledTypography = styled(Typography)({
  "@global": {
    position: "relative",
    animation: "moveAround 3s infinite linear, wiggle 5s infinite",
    "@keyframes moveAround": {
      "0%": {
        left: 0,
        top: 0,
      },
      "25%": {
        left: "50px",
        top: "50px",
      },
      "50%": {
        left: 0,
        top: 0,
      },
      "75%": {
        left: "-50px",
        top: "-50px",
      },
      "100%": {
        left: 0,
        top: 0,
      },
    },
    "@keyframes wiggle": {
      "0%, 100%": {
        transform: "translate(0, 0)",
      },
      "25%": {
        transform: "translate(0, 5px)",
      },
      "50%": {
        transform: "translate(0, 0)",
      },
      "75%": {
        transform: "translate(0, -5px)",
      },
    },
  },
});

export default Footer;
