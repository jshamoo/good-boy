import React from "react";

const Results = ({ dogs }) => (
  <div className="results">
    {!dogs.length ? (
      <h2>No Dogs Found</h2>
    ) : (
      dogs.map((dog) => (
        <div key={dog.id}>
          <img src={dog.photos[0].small} />
          <p>{dog.name}</p>
          <p>
            {dog.gender} - {dog.age} - {dog.breeds.primary}
          </p>
          <p>{dog.description || "No description"}</p>
        </div>
      ))
    )}
  </div>
);

export default Results;
