import React from "react";
import Dog from "./Dog";
import {
  Grid,
  Typography,
  useScrollTrigger,
  Zoom,
  makeStyles,
  Fab,
} from "@material-ui/core";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const useStyles = makeStyles((theme) => ({
  scrollTop: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const Results = ({ dogs }) => {
  const ScrollTop = ({ children }) => {
    const classes = useStyles();
    const trigger = useScrollTrigger();

    const handleClick = () => {
      const anchor = document.querySelector("#top-anchor");
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    };

    return (
      <Zoom in={trigger}>
        <div onClick={handleClick} className={classes.scrollTop}>
          {children}
        </div>
      </Zoom>
    );
  };

  return (
    <>
      {!dogs.length ? (
        <Typography variant="h5">
          No dogs found 🐶 Try a different search 🔎
        </Typography>
      ) : (
        <Typography variant="h5" id="top-anchor">
          Look at these good boys 💖
        </Typography>
      )}
      <Grid className="results" container>
        {dogs.map((dog) => (
          <Grid key={dog.id} item>
            <Dog dog={dog} />
          </Grid>
        ))}
      </Grid>
      <ScrollTop>
        <Fab color="secondary" size="small">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
};

export default Results;
