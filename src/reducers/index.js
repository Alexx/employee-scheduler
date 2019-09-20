import { combineReducers } from "redux";
import employeesReducer from "./employeesReducer";

const allReducers = combineReducers({
  employees: employeesReducer
});

export default allReducers;
