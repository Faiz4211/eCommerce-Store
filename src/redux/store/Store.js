import { createStore } from "redux";
import Reducers from "../reducers/Reducers";
import Reducers2 from "../reducers/Reducers2";
import AdressReducers from "../reducers/AdressReducers";
import { combineReducers } from "redux";

const routeReducer = combineReducers({ Reducers, Reducers2, AdressReducers });
export const store = createStore(routeReducer);