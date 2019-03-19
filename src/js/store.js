import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import latestReducer from "./reducers/latestReducer";

const store = createStore(
  combineReducers({
    latestReducer
  }),
  {},
  applyMiddleware(thunk)
);

export default store;
