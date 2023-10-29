import React from "react";
import { Typography } from "@mui/material";

interface Props {
  children: React.ReactNode;
}

const DescTypography: React.FC<Props> = ({ children }) => (
  <Typography variant="body2" align="left" paragraph color="gray">
    {children}
  </Typography>
);

export default DescTypography;
