import { styled } from "@mui/material";
import React from "react";

const Attr: React.FC<{ skill: any; children: React.ReactNode }> = ({
  skill,
  children,
}) => (
  <A href={skill.link} target="_blank" rel="noreferrer">
    {children}
  </A>
);

const A = styled("a")({
  width: "fit-content",
  userSelect: "none",
  "&:hover": {
    transform: "scale(1.1)",
    transition: "transform 0.5s ease-in-out",
    textDecoration: "none",
  },
});

export default Attr;
