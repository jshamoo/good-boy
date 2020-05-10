import React from "react";

const Results = ({ dogs }) => (
  <div className="results">
    {dogs.map((dog) => (
      <div key={dog.id}>
        <img src={dog.photos[0].small} />
        <p>{dog.name}</p>
        <p>
          {dog.gender} - {dog.age}
        </p>
        <p>{dog.description}</p>
      </div>
    ))}
  </div>
);

export default Results;
