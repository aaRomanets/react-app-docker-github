import {createStore, combineReducers, applyMiddleware} from "redux";
//вытаскиваем редюсер счета
import {cashReducer} from "./cashReducer";
//вытаскиваем редюсер потребителей
import {customerReducer} from "./customerReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

//составляем полный редюсер из редюсера счета и редюсера потребителей
const rootReducer = combineReducers({
    //редюсер счета задаем в виде cash
    cash: cashReducer,
    //редюсер потребителей задаем в виде customers
    customers: customerReducer
})

//составляем хранилище store с использованием thunk
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))