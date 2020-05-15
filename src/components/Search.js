import React from "react";
import Results from "./Results";
import { Grid, FormGroup, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  rootStyles: {
    flexGrow: 1,
    "margin-top": theme.spacing(12),
  },
  formStyles: {
    "margin-left": theme.spacing(2),
    maxWidth: 200,
  },
  menuItem: {
    "font-size": "10px",
  },
}));

const Search = (props) => {
  const {
    dogs,
    totalPages,
    page,
    location,
    handleSearch,
    handlePageChange,
    updateLocation,
    BreedDropdown,
    SizeDropDown,
    AgeDropDown,
  } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  const classes = useStyles();

  return (
    <Grid className={classes.rootStyles} container spacing={3}>
      <Grid item xs={3}>
        <form className={classes.formStyles} onSubmit={handleSubmit}>
          <FormGroup>
            <TextField
              id="location"
              label="Location"
              value={location}
              onChange={(e) => updateLocation(e.target.value)}
              margin="normal"
              size="small"
            />
          </FormGroup>
          <BreedDropdown />
          <SizeDropDown />
          <AgeDropDown />
          <Button variant="contained" color="primary" type="submit">
            Search
          </Button>
        </form>
      </Grid>
      <Grid item xs={9}>
        <Results
          dogs={dogs}
          page={page}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      </Grid>
    </Grid>
  );
};

export default Search;
