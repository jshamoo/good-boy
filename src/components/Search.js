import React, { useState, useEffect } from "react";
import useDropdown from "./useDropdown";
import { getDogBreeds } from "../breeds";

const Search = () => {
  const [location, setLocation] = useState("Fountain Valley, CA");
  const [breeds, setBreeds] = useState([]);
  const [breed, BreedDropdown] = useDropdown("Breed", "", breeds);
  const [size, SizeDropDown] = useDropdown("Size", "", [
    "small",
    "medium",
    "large",
    "xlarge",
  ]);

  useEffect(() => {
    getDogBreeds().then((breeds) => setBreeds(breeds));
  }, []);

  return (
    <div className="search">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <BreedDropdown />
        <SizeDropDown />
        <button>Search</button>
      </form>
    </div>
  );
};

export default Search;
