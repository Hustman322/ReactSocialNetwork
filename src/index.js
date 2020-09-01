import React from 'react';
import store from "./Redux/store";
import './index.css';
import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";




 let rendertree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
            <App state={store.getstate()} Dispatch={store.Dispatch.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );

}

rendertree(store.getstate());

store.subscribe(rendertree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();