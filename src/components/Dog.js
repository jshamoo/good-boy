import React from "react";

const Dog = ({ dog }) => (
  <>
    <img src={dog.photos[0].small} />
    <p>{dog.name}</p>
    <p>
      {dog.gender} - {dog.age} - {dog.breeds.primary}
    </p>
    <p>{dog.description || "No description"}</p>
  </>
);

export default Dog;
