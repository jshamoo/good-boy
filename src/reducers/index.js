import { combineReducers } from "redux";
import form from "./formReducer";
import breeds from "./breedsReducer";
import dogs from "./dogsReducer";

const rootReducer = combineReducers({
  form,
  breeds,
  dogs,
});

export default rootReducer;
