import { createStore } from "redux";
import rootReducer from "./reducers";

const initialState = {};
const middleware = [
	...(window.__REDUX_DEVTOOLS_EXTENSION__
		? [window.__REDUX_DEVTOOLS_EXTENSION__()]
		: [])
];
const store = createStore(rootReducer, initialState, ...middleware);

export default store;
