import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getADog } from "../petFinder";
import ErrorBoundary from "./ErrorBoundary";
import Modal from "./Modal";

const DogPage = () => {
  let { id } = useParams();
  const [dog, setDog] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getADog(id).then((resp) => {
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
        <button onClick={() => setShowModal(true)}>Adopt {dog.name}</button>
        {showModal && (
          <Modal>
            <div>
              <p>Would you like to adopt {dog.name}?</p>
              <div className="buttons">
                <a href={dog.url} target="blank">
                  <button>Yes</button>
                </a>
                <button onClick={() => setShowModal(false)}>No</button>
              </div>
            </div>
          </Modal>
        )}
      </>
    </div>
  );
};

// export default DogPage;

export default function DogPageWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <DogPage {...props} />
    </ErrorBoundary>
  );
}
