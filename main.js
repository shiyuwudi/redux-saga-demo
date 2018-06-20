import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga';

import Counter from './Counter'
import reducer from './reducers'
import rootSaga from './sagas';
import {
  INPUT_CHANGE,
  ADD_TODO,
  DELETE_IN_ONE_SEC,
} from "./actionTypes";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(rootSaga);

const action = (type, payload) => store.dispatch({ type, payload })

function render() {
  const state = store.getState();
  const { inputValue, todos } = state;
  ReactDOM.render(
    <Counter
      inputValue={inputValue}
      onInputValueChange={(e) => action(INPUT_CHANGE, e.target.value)}
      addTodo={() => action(ADD_TODO)}
      todos={todos}
      delete={(id) => action(DELETE_IN_ONE_SEC, id)}
    />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
