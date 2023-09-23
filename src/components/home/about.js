import React from "react";
import MainAppBar from "./mainAppBar";
import { Container, Divider, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Footer from "./footer";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
  inner: {
    margin: theme.spacing(2),
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <div>
      <MainAppBar />
      <Container maxWidth="md" className={classes.root} align="center">
        <Paper elevation={5}>
          <Divider />
          <Typography
            className={classes.inner}
            variant="h4"
            display="block"
            gutterBottom
            color="textSecondary"
          >
            Languages
          </Typography>
          <Divider />
          <Typography
            className={classes.inner}
            variant="h6"
            gutterBottom
            color="textSecondary"
          >
            Java | C++ | C | Python | Javascript | C#
          </Typography>
          <Divider />
          <Typography
            className={classes.inner}
            variant="h4"
            display="block"
            gutterBottom
            color="textSecondary"
          >
            Frameworks
          </Typography>
          <Divider />
          <Typography
            className={classes.inner}
            variant="h6"
            gutterBottom
            color="textSecondary"
          >
            React-JS | React-Native | Flask (Python) | Spring Boot (Java
            Backend)
          </Typography>
          <Divider />
          <Typography
            className={classes.inner}
            variant="h4"
            display="block"
            gutterBottom
            color="textSecondary"
          >
            Technologies
          </Typography>
          <Divider />
          <Typography
            className={classes.inner}
            variant="h6"
            gutterBottom
            color="textSecondary"
          >
            Android Development | Cross-Platform Apps (React-Native) | Embedded
            Systems (C) | Automation | Databases | Linux | Web Applications
          </Typography>
          <Divider />
        </Paper>
      </Container>
      <Footer />
    </div>
  );
}
