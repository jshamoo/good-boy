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
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  scrollTop: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const Results = ({ dogs, totalPages, page, handlePageChange }) => {
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

  const handlePageClick = (e, value) => {
    handlePageChange(value);
  };

  if (dogs === null) {
    return <img src="/loading.gif" />;
  }

  if (dogs.length === 0) {
    return (
      <Typography variant="h5">
        No dogs found 🐶 Try a different search 🔎
      </Typography>
    );
  }

  return (
    <>
      <Typography variant="h5" id="top-anchor">
        Look at these good boys 💖
      </Typography>
      <Grid className="results" container>
        {dogs.map((dog) => (
          <Grid key={dog.id} item>
            <Dog dog={dog} />
          </Grid>
        ))}
      </Grid>
      {totalPages > 1 && (
        <Pagination
          count={totalPages}
          page={page}
          color="primary"
          onChange={handlePageClick}
        />
      )}
      <ScrollTop>
        <Fab color="secondary" size="small">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
};

export default Results;
