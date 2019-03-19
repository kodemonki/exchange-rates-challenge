import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import latestReducer from "./reducers/latestReducer";
import searchReducer from "./reducers/searchReducer";

const store = createStore(
  combineReducers({
    latestReducer,
    searchReducer
  }),
  {},
  applyMiddleware(thunk)
);

export default store;
