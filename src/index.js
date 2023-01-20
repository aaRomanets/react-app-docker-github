import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { Provider } from 'react-redux';
//вытаскиваем хранилище store
import {store} from "./store"

ReactDOM.render(
    //хранилище store отправляем в провайдер
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
