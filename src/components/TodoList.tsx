import React from 'react';
import TodoItem from './TodoItem';

import './TodoList.css';

const TodoList = ({todos}: any) => {
  return (
    <div className='todoList'>
      {todos.map((todo:string, index:number) => {
        return <TodoItem key={index}>{todo}</TodoItem>;
      })}
    </div>
  );
};

export default TodoList;
