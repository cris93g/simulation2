import { createStore, applyMiddleware } from "redux";
import promiseMiddlware from "redux-promise-middleware";
import housesReducer from "./ducks/housesReducer";

const middleware = applyMiddleware(promiseMiddlware());
const store = createStore(housesReducer, middleware);

export default store;
