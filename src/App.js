import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { connect } from "react-redux";
import Search from "./components/Search";
import DogPage from "./components/DogPage";
import NavBar from "./components/NavBar";
// import { getDogBreeds, getDogs } from "./petFinder";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    fontSize: 12,
  },
});

const App = () => {
  // const handleSearch = () => {
  //   getDogs(breed, location, size, age).then((dogs) => {
  //     setDogs(dogs.animals);
  //     setTotalPages(dogs.pagination.total_pages);
  //     setPage(1);
  //   });
  // };

  // const handlePageChange = (value) => {
  //   setPage(value);
  // };

  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Search />
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
