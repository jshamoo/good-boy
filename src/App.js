import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./components/Search";
import DogPage from "./components/DogPage";
import NavBar from "./components/NavBar";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
const theme = createMuiTheme({
  typography: {
    fontSize: 12,
  },
});

const App = () => {
  return (
    <React.StrictMode>
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
    </React.StrictMode>
  );
};

export default App;
