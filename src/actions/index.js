export const setBreeds = (breeds) => {
  return {
    type: "SET_BREEDS",
    breeds,
  };
};

export const setBreed = (breed) => {
  return {
    type: "SET_BREED",
    breed,
  };
};

export const setAge = (age) => {
  return {
    type: "SET_AGE",
    age,
  };
};

export const setSize = (size) => {
  return {
    type: "SET_SIZE",
    size,
  };
};

export const setLocation = (location) => {
  return {
    type: "SET_LOCATION",
    location,
  };
};

export const setDogs = (dogs) => {
  return {
    type: "SET_DOGS",
    dogs,
  };
};

export const setPage = (page) => {
  return {
    type: "SET_PAGE",
    page,
  };
};

export const setTotalPages = (totalPages) => {
  return {
    type: "SET_TOTAL_PAGES",
    totalPages,
  };
};
