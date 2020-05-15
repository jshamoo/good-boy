const initialState = {
  location: "Fountain Valley, CA",
  breed: [],
  size: [],
  age: [],
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOCATION":
      return { ...state, location: action.location };
    case "SET_BREED":
      return { ...state, breed: action.breed };
    case "SET_SIZE":
      return { ...state, size: action.size };
    case "SET_AGE":
      return { ...state, age: action.age };
    default:
      return state;
  }
};

export default formReducer;
