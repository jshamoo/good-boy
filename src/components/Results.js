import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setPage, fetchDogs } from "../actions";
import Dog from "./Dog";
import ScrollTop from "./ScrollTop";
import { Grid, Typography, Fab } from "@material-ui/core";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Pagination from "@material-ui/lab/Pagination";

const Results = (props) => {
  const {
    breed,
    location,
    size,
    age,
    dogs,
    totalPages,
    page,
    handlePageChange,
    handleSearch,
  } = props;

  const handlePageClick = (e, value) => {
    handlePageChange(value);
    const anchor = document.querySelector("#top-anchor");
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  useEffect(() => {
    handleSearch(breed, location, size, age, page);
  }, [page]);

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
        <Grid container justify="center">
          <Grid item>
            <Pagination
              count={totalPages}
              page={page}
              color="primary"
              onChange={handlePageClick}
            />
          </Grid>
        </Grid>
      )}
      <ScrollTop>
        <Fab color="secondary" size="small">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
};

const mapStateToProps = (state) => ({
  dogs: state.animals.dogs,
  totalPages: state.animals.totalPages,
  breed: state.form.breed,
  location: state.form.location,
  size: state.form.size,
  age: state.form.age,
  page: state.form.page,
});

const mapDispatchToProps = (dispatch) => ({
  handlePageChange: (page) => dispatch(setPage(page)),
  handleSearch: (breed, location, size, age, page) => {
    dispatch(fetchDogs(breed, location, size, age, page));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);
