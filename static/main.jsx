'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import { hashHistory } from 'react-router';
import promiseMiddleware from 'redux-promise-middleware';
import { syncHistory, routeReducer } from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

// react components
import { Root } from './views';
import DevTools from './devtools';

// app
import * as reducers from './reducers';

// setup
const historyMiddleware = syncHistory(hashHistory);
const reducer = combineReducers({
  ...reducers,
  routing: routeReducer
});


const composeList = [
  applyMiddleware(historyMiddleware, promiseMiddleware())
];

if(process.env.NODE_ENV != 'production'){
  composeList.push(DevTools.instrument());
}

const finalCreateStore = compose(...composeList)(createStore);
const store = finalCreateStore(reducer);

injectTapEventPlugin();

// redux simple router indicated this was necesary when using dev tools. it seems to just break routing though
if(process.env.NODE_ENV != 'production') {
  historyMiddleware.listenForReplays(store);
}

ReactDOM.render(
  // put this stuff
  <Root history={hashHistory} store={store} DevTools={<DevTools/>} />,
  // in this element
  document.getElementById('root')
);

export default {};