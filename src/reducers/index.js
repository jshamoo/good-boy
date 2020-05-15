import { combineReducers } from "redux";
import form from "./formReducer";
import breeds from "./breedsReducer";
import animals from "./animalsReducer";

const rootReducer = combineReducers({
  form,
  breeds,
  animals,
});

export default rootReducer;
