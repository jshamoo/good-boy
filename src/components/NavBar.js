import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Typography, makeStyles } from "@material-ui/core";
import "typeface-roboto/index.css";

const useStyles = makeStyles((theme) => ({
  headerStyles: {
    margin: theme.spacing(2),
    color: "white",
  },
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <AppBar>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Typography variant="h3" noWrap className={classes.headerStyles}>
          Good Boy
          <img src="/dog.png" width="45" alt="logo" />
        </Typography>
      </Link>
    </AppBar>
  );
};

export default NavBar;
