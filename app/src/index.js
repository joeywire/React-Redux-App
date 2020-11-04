//Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import logger from "redux-logger";

// redux/ helpers
import { quoteReducer } from "./store/reducers/quoteReducer"
//Components
import App from './App';

//Styles
import './index.css';

const store = createStore(quoteReducer, applyMiddleware(thunk, logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

