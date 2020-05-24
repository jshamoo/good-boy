import React from "react";
import { useScrollTrigger, Zoom, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  scrollTop: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));
const ScrollTop = ({ children }) => {
  const classes = useStyles();
  const trigger = useScrollTrigger();

  const handleClick = () => {
    const anchor = document.querySelector("#top-anchor");
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <Zoom in={trigger}>
      <div
        onClick={handleClick}
        className={classes.scrollTop}
        data-testid="scroll-top"
      >
        {children}
      </div>
    </Zoom>
  );
};

export default ScrollTop;
