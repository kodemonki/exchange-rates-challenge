import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import latestReducer from "./reducers/latestReducer";
import searchReducer from "./reducers/searchReducer";
import historicReducer from "./reducers/historicReducer";

const store = createStore(
  combineReducers({
    latestReducer,
    searchReducer,
    historicReducer
  }),
  {},
  applyMiddleware(thunk)
);

export default store;
