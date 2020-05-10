import React, { useState, useEffect } from "react";
import useDropdown from "./useDropdown";

const Search = () => {
  const [location, setLocation] = useState("Fountain Valley, CA");
  const [breeds, setBreeds] = useState([
    "Mastiff",
    "Border Collie",
    "German Sheperd",
    "Mixed",
  ]);
  const [breed, BreedDropdown] = useDropdown("Breed", [], breeds);

  useEffect(() => {}, []);

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
        <button>Search</button>
      </form>
    </div>
  );
};

export default Search;
