import { combineReducers } from "redux";
import employeesReducer from "./employeesReducer";

const allReducers = combineReducers({
  data: employeesReducer
});

export default allReducers;
