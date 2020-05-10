import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Search from "./components/Search";
import DogPage from "./components/DogPage";

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <h1>Adopt Dog</h1>
        <Router>
          <ul>
            <li>
              <Link to="/">Search</Link>
            </li>
            <li>
              <Link to="/dogs/:id">Dog</Link>
            </li>
          </ul>
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
