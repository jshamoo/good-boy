import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./components/Search";
import DogPage from "./components/DogPage";
import NavBar from "./components/NavBar";
import useDropdown from "./components/useDropdown";
import { getDogBreeds, getDogs } from "./petFinder";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    fontSize: 12,
  },
});

const App = () => {
  const [location, setLocation] = useState("Fountain Valley, CA");
  const [breeds, setBreeds] = useState([]);
  const [breed, BreedDropdown] = useDropdown("Breed", [], breeds);
  const [size, SizeDropDown] = useDropdown(
    "Size",
    [],
    ["Small", "Medium", "Large", "Xlarge"]
  );
  const [age, AgeDropDown] = useDropdown(
    "Age",
    [],
    ["Baby", "Young", "Adult", "Senior"]
  );
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
    getDogs(breed, location, size, age, page).then((dogs) => {
      setDogs(dogs.animals);
      setTotalPages(dogs.pagination.total_pages);
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
                handleSearch={handleSearch}
                page={page}
                totalPages={totalPages}
                handlePageChange={handlePageChange}
                updateLocation={setLocation}
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

export default App;
