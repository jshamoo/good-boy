export const setBreed = (breed) => ({
  type: "SET_BREED",
  breed,
});

export const setAge = (age) => ({
  type: "SET_AGE",
  age,
});

export const setSize = (size) => ({
  type: "SET_SIZE",
  size,
});

export const setLocation = (location) => ({
  type: "SET_LOCATION",
  location,
});

export const setPage = (page) => {
  return {
    type: "SET_PAGE",
    page,
  };
};

// async actions
import { getDogBreeds } from "../petFinder";
export const fetchBreeds = () => (dispatch) =>
  getDogBreeds().then((breeds) =>
    dispatch({
      type: "FETCH_BREEDS",
      breeds,
    })
  );

export const fetchDogs = (dogs) => {
  return {
    type: "FETCH_DOGS",
    dogs,
  };
};

export const setTotalPages = (totalPages) => {
  return {
    type: "SET_TOTAL_PAGES",
    totalPages,
  };
};
