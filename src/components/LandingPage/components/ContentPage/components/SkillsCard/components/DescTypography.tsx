import React from "react";
import { Typography } from "@mui/material";

interface Props {
  children: React.ReactNode;
}

const DescTypography: React.FC<Props> = ({ children }) => (
  <Typography
    align="left"
    color="gray"
    variant="subtitle1"
    style={{ fontSize: "16px" }}
  >
    {children}
  </Typography>
);

export default DescTypography;
