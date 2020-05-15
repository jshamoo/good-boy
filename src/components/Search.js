import React, { useEffect } from "react";
import { connect } from "react-redux";
import Dropdown from "./Dropdown";
import {
  setLocation,
  setAge,
  setBreed,
  setSize,
  setPage,
  fetchBreeds,
  fetchDogs,
} from "../actions";
import { FormGroup, TextField, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
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
    resetPage,
  } = props;

  const BreedDropdown = Dropdown("Breed", breeds, breed, updateBreed);
  const SizeDropDown = Dropdown("Size", sizes, size, updateSize);
  const AgeDropDown = Dropdown("Age", ages, age, updateAge);

  useEffect(() => {
    updateBreeds();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    resetPage();
    handleSearch(breed, location, size, age, 1);
  };

  return (
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
  );
};

const mapStateToProps = (state) => ({
  location: state.form.location,
  breed: state.form.breed,
  size: state.form.size,
  age: state.form.age,
  page: state.form.page,
  breeds: state.breeds,
});

const mapDispatchToProps = (dispatch) => ({
  updateLocation: (location) => dispatch(setLocation(location)),
  updateBreed: (breed) => dispatch(setBreed(breed)),
  updateSize: (size) => dispatch(setSize(size)),
  updateAge: (age) => dispatch(setAge(age)),
  updateBreeds: () => dispatch(fetchBreeds()),
  resetPage: () => dispatch(setPage(1)),
  handleSearch: (breed, location, size, age) => {
    dispatch(fetchDogs(breed, location, size, age, 1));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
