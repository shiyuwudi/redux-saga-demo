import React from 'react';

import TodoList from "./components/TodoList";
import {
  INPUT_CHANGE,
  ADD_TODO,
  DELETE_IN_ONE_SEC,
  GET_USER,
} from "./actionTypes";
import {action, store} from './main'
import Users from "./components/Users";

function App() {
  const state = store.getState();
  const { inputValue, todos, users } = state;
  return (
    <div>
      <TodoList
        inputValue={inputValue}
        onInputValueChange={(e) => action(INPUT_CHANGE, e.target.value)}
        addTodo={() => action(ADD_TODO)}
        todos={todos}
        delete={(id) => action(DELETE_IN_ONE_SEC, id)}
        mock={() => action(GET_USER)}
      />
      <Users users={users} />
    </div>
  );
}

export default App;