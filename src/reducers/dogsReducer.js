const dogsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_DOGS":
      return action.dogs;
    default:
      return state;
  }
};

export default dogsReducer;
