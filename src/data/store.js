import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import persistState from "redux-localstorage";

import initial from './initial';
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initial,
  composeEnhancers(applyMiddleware(thunk), persistState())
);

export default store;