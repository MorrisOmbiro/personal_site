import { styled } from "@material-ui/core";
import { Typography } from "@mui/material";
import React from "react";

const Header: React.FC = () => {
  return (
    <Title>
      <Typography variant="h2" color="black">
        MORRIS OMBIRO
      </Typography>
      <Typography variant="body2" color="GrayText">
        <strong>
          SOFTWARE ENGINEER <BlackSpan>⬩</BlackSpan> VOLUNTEER TUTOR{" "}
          <BlackSpan>⬩</BlackSpan> TECH. ENTHUSIAST
        </strong>
      </Typography>
    </Title>
  );
};

const Title = styled("div")({
  position: "relative",
  top: "6%",
  zIndex: 15,
  textAlign: "center",
});

const BlackSpan = styled("span")({
  color: "#800000",
});

export default Header;
