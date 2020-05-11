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

  if (!dog) {
    return <img src="/loading.gif" />;
  }
  return (
    <div className="dog-page">
      <>
        <h2>{dog.name}</h2>
        <img
          src={dog.photos.length ? dog.photos[0].medium : ""}
          alt={dog.name + " 's photo"}
        />
        <p>
          {dog.gender} - {dog.age} - {dog.breeds.primary}
        </p>
        <p>
          {dog.contact.address.city}, {dog.contact.address.state}
        </p>
        <p>{dog.description || "No description"}</p>
        <button>Adopt {dog.name}</button>
      </>
    </div>
  );
};

export default DogPage;
