import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import Results from "./components/Results";
import DogPage from "./components/DogPage";
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import { Paper, Grid } from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    fontSize: 12,
  },
});

const useStyles = makeStyles((theme) => ({
  rootStyles: {
    flexGrow: 1,
    "margin-top": theme.spacing(12),
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Grid className={classes.rootStyles} container spacing={3}>
                <Grid item xs={3}>
                  <Search />
                </Grid>
                <Grid item xs={9}>
                  <Results />
                </Grid>
              </Grid>
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
