import React from 'react';
import './index.module.css';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter, Switch} from "react-router-dom";
import {Provider} from "react-redux";
import ExportAppContainer from "./appContainer";
import BlockMainSelect from "./components/common/selectBlock/blockMainSelect";

let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <ExportAppContainer/>
            </Provider>
        </BrowserRouter>
        , document.getElementById('root'));
};
rerenderEntireTree();
store.subscribe(() => {
    rerenderEntireTree();
});
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
