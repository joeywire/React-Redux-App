//Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import logger from "redux-logger";

// redux/ helpers
import reducer from "./store/reducers/index"
//Components
import App from './App';

//Styles
import './index.css';

const store = createStore(reducer, applyMiddleware(thunk, logger))
console.log(store.getState())
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

