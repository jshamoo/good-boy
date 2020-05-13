import React, { useState, useEffect } from "react";
import useDropdown from "./useDropdown";
import { getDogBreeds, getDogs } from "../petFinder";
import Results from "./Results";
import { Grid, Paper, FormGroup, TextField, Button } from "@material-ui/core";
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

const Search = () => {
  const [location, setLocation] = useState("Fountain Valley, CA");
  const [breeds, setBreeds] = useState([]);
  const [breed, BreedDropdown] = useDropdown("Breed", "", breeds);
  const [size, SizeDropDown] = useDropdown("Size", "", [
    "Small",
    "Medium",
    "Large",
    "Xlarge",
  ]);
  const [age, AgeDropDown] = useDropdown("Age", "", [
    "Baby",
    "Young",
    "Adult",
    "Senior",
  ]);
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    getDogBreeds().then((breeds) => setBreeds(breeds));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    getDogs(breed, location, size, age).then((dogs) => {
      console.log("dogs", dogs.animals);
      setDogs(dogs.animals);
    });
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
              onChange={(e) => setLocation(e.target.value)}
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
        <Results dogs={dogs} />
      </Grid>
    </Grid>
  );
};

export default Search;
