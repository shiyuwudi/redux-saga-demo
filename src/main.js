import "babel-polyfill"
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga';

import reducer from './reducers'
import rootSaga from './sagas';
import App from "./App";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducer, composeEnhancers(
  applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(rootSaga);

export const action = (type, payload) => store.dispatch({ type, payload })

function render() {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
