import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 21,
    marginRight: theme.spacing(8),
  },
  about: {
    marginRight: theme.spacing(4),
  },
}));

const navLinks = {
  textDecoration: "inherit",
  fontFamily: "inherit",
  color: "#000",
  fontSize: "1em",
  marginRight: 45,
  // fontWeight: "bold",
  cursor: "pointer",
};

const logo = {
  marginLeft: 50,
};

const MainAppBar: React.FC = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar
        className="animate-appbar"
        position="fixed"
        style={{ background: "#D7D7D9" }}
      >
        <Toolbar>
          <Typography variant="h5" className={classes.title} style={logo}>
            <NavLink
              to="/"
              style={{
                color: "white",
                textDecoration: "inherit",
                fontSize: 38,
              }}
            >
              m
              <b>
                <span style={{ color: "#2CC1D2" }}>|</span>O
              </b>
            </NavLink>
          </Typography>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            style={navLinks}
          >
            ABOUT
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            style={navLinks}
          >
            SKILLS
          </Link>
          <Link
            activeClass="active"
            to="languages"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            style={navLinks}
          >
            LANGUAGES
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MainAppBar;
