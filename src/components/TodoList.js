import React from 'react'

const Counter = (props) => (
  <div>
    <div>
      <input
        value={props.inputValue}
        onChange={props.onInputValueChange}
      />
      {' '}
      <button onClick={props.addTodo}>添加</button>
      {' '}
      <button onClick={props.mock}>获取GitLab用户</button>
    </div>
    <br />

    <ul>
      {props.todos.map((todo) => (
        <li key={todo.id}>
          {todo.title}
          {' '}
          <a
            href="javascript:void(0)"
            style={{ color: 'red' }}
            onClick={() => props.delete(todo.id)}
          >{todo.sec}s后删除</a>
        </li>
      ))}
    </ul>
  </div>
);

export default Counter
