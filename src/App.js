import React from "react";
import { Router, Link } from "@reach/router";
import Search from "./components/Search";

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <h1>Adopt Dog</h1>
        <Search />
      </div>
    </React.StrictMode>
  );
};

export default App;
