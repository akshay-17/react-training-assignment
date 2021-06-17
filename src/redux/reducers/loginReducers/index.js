import { combineReducers } from "redux";
import { dashboardReducer } from "../dashboardReducers/dashboardReducer";
import { loginReducer } from "./loginReducer";
export const rootReducer = combineReducers({
  login: loginReducer,
  dashboard: dashboardReducer,
});
