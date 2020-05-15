import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Search from "./components/Search";
import DogPage from "./components/DogPage";
import NavBar from "./components/NavBar";
import Dropdown from "./components/Dropdown";
import { getDogBreeds, getDogs } from "./petFinder";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { setLocation, setAge, setBreed, setSize } from "./actions";

const theme = createMuiTheme({
  typography: {
    fontSize: 12,
  },
});

const App = (props) => {
  const sizes = ["Small", "Medium", "Large", "Xlarge"];
  const ages = ["Baby", "Young", "Adult", "Senior"];
  const {
    location,
    updateLocation,
    breed,
    updateBreed,
    size,
    updateSize,
    age,
    updateAge,
  } = props;

  const [breeds, setBreeds] = useState([]);

  const BreedDropdown = Dropdown("Breed", breeds, breed, updateBreed);
  const SizeDropDown = Dropdown("Size", sizes, size, updateSize);
  const AgeDropDown = Dropdown("Age", ages, age, updateAge);

  const [dogs, setDogs] = useState(null);
  const [totalPages, setTotalPages] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getDogBreeds().then((breeds) => setBreeds(breeds));
  }, []);

  useEffect(() => {
    getDogs(breed, location, size, age, page).then((dogs) => {
      setDogs(dogs.animals);
      setTotalPages(dogs.pagination.total_pages);
    });
  }, [page]);

  const handleSearch = () => {
    getDogs(breed, location, size, age).then((dogs) => {
      setDogs(dogs.animals);
      setTotalPages(dogs.pagination.total_pages);
      setPage(1);
    });
  };

  const handlePageChange = (value) => {
    setPage(value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Search
                dogs={dogs}
                location={location}
                updateLocation={updateLocation}
                handleSearch={handleSearch}
                page={page}
                totalPages={totalPages}
                handlePageChange={handlePageChange}
                BreedDropdown={BreedDropdown}
                SizeDropDown={SizeDropDown}
                AgeDropDown={AgeDropDown}
              />
            </Route>
            <Route path="/dogs/:id">
              <DogPage />
            </Route>
          </Switch>
        </Router>
      </Paper>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => ({
  location: state.form.location,
  breed: state.form.breed,
  size: state.form.size,
  age: state.form.age,
});

const mapDispatchToProps = (dispatch) => ({
  updateLocation: (location) => dispatch(setLocation(location)),
  updateBreed: (breed) => dispatch(setBreed(breed)),
  updateSize: (size) => dispatch(setSize(size)),
  updateAge: (age) => dispatch(setAge(age)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
