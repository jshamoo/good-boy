import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getADog } from "../petFinder";

const DogPage = () => {
  let { id } = useParams();
  const [dog, setDog] = useState(null);

  useEffect(() => {
    getADog(id).then((resp) => {
      console.log(resp);
      setDog(resp.animal);
    });
  }, []);

  return (
    <div className="dog-page">
      {!dog ? (
        "No Dog Found"
      ) : (
        <>
          <h2>{dog.name}</h2>
          <p>
            {dog.gender} - {dog.age} - {dog.breeds.primary}
          </p>
          <p>{dog.description || "No description"}</p>
        </>
      )}
    </div>
  );
};

export default DogPage;
