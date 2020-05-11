import React from "react";
import { Link } from "react-router-dom";

const Dog = ({ dog }) => (
  <Link to={`/dogs/${dog.id}`}>
    <img
      src={dog.photos.length ? dog.photos[0].small : ""}
      alt={dog.name + " 's photo"}
    />
    <p>{dog.name}</p>
    <p>
      {dog.gender} - {dog.age} - {dog.breeds.primary}
    </p>
  </Link>
);

export default Dog;
