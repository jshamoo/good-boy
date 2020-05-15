import React, { useEffect } from "react";
import { connect } from "react-redux";
import Results from "./Results";
import Dropdown from "./Dropdown";
import {
  setLocation,
  setAge,
  setBreed,
  setSize,
  fetchBreeds,
  fetchDogs,
} from "../actions";
import {
  Grid,
  FormGroup,
  TextField,
  Button,
  makeStyles,
} from "@material-ui/core";

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

const sizes = ["Small", "Medium", "Large", "Xlarge"];
const ages = ["Baby", "Young", "Adult", "Senior"];

const Search = (props) => {
  const classes = useStyles();
  const {
    handleSearch,
    location,
    updateLocation,
    breed,
    updateBreed,
    size,
    updateSize,
    age,
    updateAge,
    breeds,
    updateBreeds,
  } = props;

  const BreedDropdown = Dropdown("Breed", breeds, breed, updateBreed);
  const SizeDropDown = Dropdown("Size", sizes, size, updateSize);
  const AgeDropDown = Dropdown("Age", ages, age, updateAge);

  useEffect(() => {
    updateBreeds();
    handleSearch();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(breed, location, size, age, 1);
  };

  // useEffect(() => {
  //   getDogs(breed, location, size, age, page).then((dogs) => {
  //     setDogs(dogs.animals);
  //     setTotalPages(dogs.pagination.total_pages);
  //   });
  // }, [page]);

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
        <Results />
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  location: state.form.location,
  breed: state.form.breed,
  size: state.form.size,
  age: state.form.age,
  breeds: state.breeds,
});

const mapDispatchToProps = (dispatch) => ({
  updateLocation: (location) => dispatch(setLocation(location)),
  updateBreed: (breed) => dispatch(setBreed(breed)),
  updateSize: (size) => dispatch(setSize(size)),
  updateAge: (age) => dispatch(setAge(age)),
  updateBreeds: () => dispatch(fetchBreeds()),
  handleSearch: (breed, location, size, age, page) => {
    dispatch(fetchDogs(breed, location, size, age, page));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
