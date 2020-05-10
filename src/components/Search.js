import React, { useState, useEffect } from "react";
import useDropdown from "./useDropdown";
import { getDogBreeds, getDogs } from "../breeds";

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
  const [age, AgeDropDown] = useDropdown("Age", "", [
    "baby",
    "young",
    "adult",
    "senior",
  ]);

  useEffect(() => {
    getDogBreeds().then((breeds) => setBreeds(breeds));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(breed, location, size, age);
    getDogs(breed, location, size, age).then((dogs) =>
      console.log("dogs", dogs)
    );
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
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
        <AgeDropDown />
        <button>Search</button>
      </form>
    </div>
  );
};

export default Search;
