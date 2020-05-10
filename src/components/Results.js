import React from "react";
import Dog from "./Dog";

const Results = ({ dogs }) => (
  <div className="results">
    {!dogs.length ? (
      <h2>No Dogs Found</h2>
    ) : (
      dogs.map((dog) => (
        <div key={dog.id}>
          <Dog dog={dog} />
        </div>
      ))
    )}
  </div>
);

export default Results;
