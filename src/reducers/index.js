import { combineReducers } from "redux";
import form from "./formReducer";
import breeds from "./breedsReducer";

const rootReducer = combineReducers({
  form,
  breeds,
});

export default rootReducer;
