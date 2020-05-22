import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

const initialState = {
  form: {
    location: "Fountain Valley, CA",
    breed: [],
    size: [],
    age: [],
    page: 1,
  },
  breeds: [],
  animals: {
    dogs: null,
    totalPages: 1,
  },
};

function render(
  ui,
  {
    store = createStore(rootReducer, initialState, applyMiddleware(thunk)),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from "@testing-library/react";

export { render };
