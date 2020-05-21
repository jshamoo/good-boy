import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, fireEvent } from "@testing-library/react";
import NavBar from "../components/NavBar";

test("NavBar can navigate to home page", () => {
  const history = createMemoryHistory();
  history.push("/dogs/101");
  const { getByText } = render(
    <Router history={history}>
      <Switch>
        <Route path="/dogs/101">
          <NavBar />
        </Route>
        <Route path="/">
          <div>Home Page</div>
        </Route>
      </Switch>
    </Router>
  );

  fireEvent.click(getByText(/good boy/i));
  expect(getByText(/Home Page/i)).not.toBeNull();
});
