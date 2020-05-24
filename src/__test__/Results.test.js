import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, screen } from "@testing-library/react";
import store from "../store";
import Results from "../components/Results";

test("Has a loading img when render with default state", () => {
  render(
    <Provider store={store}>
      <Results />
    </Provider>
  );
  expect(screen.getByAltText(/loading-img/i)).toBeDefined();
});

test("Render message when there is no dog for the search", () => {
  render(
    <Provider store={store}>
      <Results />
    </Provider>
  );
  store.dispatch({
    type: "FETCH_DOGS",
    dogs: [],
    totalPages: 0,
  });
  expect(screen.getByText(/No dogs found/i)).toBeDefined();
  expect(screen.queryByTestId("pagination")).toBeNull();
  expect(screen.queryByTestId("fab")).toBeNull();
});

xtest("loads and display Results page", () => {
  const history = createMemoryHistory();
  render(
    <Provider store={store}>
      <Router history={history}>
        <Results />
      </Router>
    </Provider>
  );
  store.dispatch({
    type: "FETCH_DOGS",
    dogs: [
      {
        id: 1,
        name: "bandit",
        age: "1.6 years old",
        gender: "male",
        breeds: { primary: "mix" },
        photos: [],
      },
      {
        id: 2,
        name: "rockey",
        age: "3 years old",
        gender: "male",
        breeds: { primary: "lab" },
        photos: [],
      },
      {
        id: 3,
        name: "kiki",
        age: "6 months old",
        gender: "female",
        breeds: { primary: "chihuahua" },
        photos: [],
      },
    ],
    totalPages: 1,
  });

  expect(screen.getByText(/these good boys/i)).toBeDefined();
  expect(screen.queryByTestId("pagination")).toBeNull();
  expect(screen.queryByTestId("fab")).not.toBeNull();
});

test.skip("Show pagination only when there is more than one page", () => {});

test.skip("Search for more dogs when click on next page", () => {});
