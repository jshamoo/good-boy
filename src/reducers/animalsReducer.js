const initialState = {
  dogs: null,
  totalPages: 1,
};

const animalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DOGS":
      return { ...state, dogs: action.dogs, totalPages: action.totalPages };
    default:
      return state;
  }
};

export default animalsReducer;
