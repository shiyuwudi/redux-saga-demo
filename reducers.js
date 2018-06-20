import {ADD_TODO, DELETE, INPUT_CHANGE, TO_BE_DELETED} from "./actionTypes";

const initialState = {
  inputValue: '第一个代办事项',
  todos: [],
};

let id = 0;

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INPUT_CHANGE: {
      return {
        ...state,
        inputValue: action.payload,
      };
    }
    case ADD_TODO: {
      if (state.inputValue) {
        return {
          ...state,
          todos: state.todos.concat([{ title: state.inputValue, id: ++id, sec: 3 }]),
          inputValue: '',
        };
      }
      return state;
    }
    case TO_BE_DELETED: {
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (action.payload === todo.id) {
            return {
              ...todo,
              sec: todo.sec - 1,
            };
          }
          return todo;
        }),
      };
    }
    case DELETE: {
      return {
        ...state,
        todos: state.todos.filter(obj => obj.id !== action.payload),
      };
    }
    default: {
      return state
    }
  }
}
