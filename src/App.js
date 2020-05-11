import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./components/Search";
import DogPage from "./components/DogPage";

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <h1>Adopt Dog</h1>
        <Router>
          <Switch>
            <Route exact path="/">
              <Search />
            </Route>
            <Route path="/dogs/:id">
              <DogPage />
            </Route>
          </Switch>
        </Router>
      </div>
    </React.StrictMode>
  );
};

export default App;
