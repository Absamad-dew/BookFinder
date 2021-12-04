import { createStore, combineReducers } from "redux";
import {cashReducer} from "./cashReducer";
import { customerReducer } from "./customerReducer";
import {bookReducer} from "./bookReducer";
import { composeWithDevTools } from "redux-devtools-extension";



const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customerReducer,
    books: bookReducer,
})


export const store = createStore(rootReducer, composeWithDevTools())
