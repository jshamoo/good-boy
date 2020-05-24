import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, screen, fireEvent } from "@testing-library/react";
import Dog from "../components/Dog";

test("loads and displays the dog card", () => {
  const dog = {
    id: 101,
    name: "Bandit",
    photos: [],
    gender: "male",
    age: "1+ years old",
    breeds: { primary: "mixed" },
  };
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Dog dog={dog} />
    </Router>
  );
  expect(screen.queryByAltText(/s'photo/i)).toBeDefined();
  expect(screen.queryByText(/bandit/i)).toBeDefined();
  expect(screen.queryByText("Learn More")).toBeDefined();
});

test("Learn more button navigates to dog details page", () => {
  const dog = {
    id: 101,
    name: "Bandit",
    photos: [],
    gender: "male",
    age: "1+ years old",
    breeds: { primary: "mixed" },
  };
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <Dog dog={dog} />
        </Route>
        <Route path="/dogs/:id">
          <div>This is the dog details page</div>
        </Route>
      </Switch>
    </Router>
  );
  fireEvent.click(screen.queryByText("Learn More"));
  expect(screen.getByText(/dog details page/i)).toBeDefined();
});
