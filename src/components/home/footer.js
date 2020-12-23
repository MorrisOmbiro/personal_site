import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <Typography className ={classes.root} variant="body2" color="textSecondary" align="center">
      {"© "}
      {new Date().getFullYear()}
      {"."} {"Syntax Light, Algorithm Tight"}
    </Typography>
  );
}
