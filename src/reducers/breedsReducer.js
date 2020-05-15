const breedsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_BREEDS":
      return action.breeds;
    default:
      return state;
  }
};

export default breedsReducer;
