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

export const setPage = (page) => ({ type: "SET_PAGE", page });

// async actions
import { getDogBreeds, getDogs } from "../petFinder";
export const fetchBreeds = () => (dispatch) =>
  getDogBreeds()
    .then((breeds) =>
      dispatch({
        type: "FETCH_BREEDS",
        breeds,
      })
    )
    .catch((err) => console.error(err));

export const fetchDogs = (breed, location, size, age, page) => (dispatch) =>
  getDogs(breed, location, size, age, page)
    .then((resp) => {
      dispatch({
        type: "FETCH_DOGS",
        dogs: resp.animals,
        totalPages: resp.pagination.total_pages,
      });
    })
    .catch((err) => console.error(err));
