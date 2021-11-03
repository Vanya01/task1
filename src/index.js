import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import {Provider} from "react-redux";

let initialState = {
    photo: [],
    pages: 1,
    totalPages: 0
}
console.log(initialState.totalPages,'infooo')

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case"GET_PHOTOS":
            return {...state, photo: [action.payload]}
        case "GET_PAGES":
            return {...state, pages: action.payload}
        case "TOTAL_PAGES":
            return {...state, totalPages: action.payload}
        default:
            return state
    }
}

let store = createStore(reducer);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
