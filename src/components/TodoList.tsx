import React from 'react';
import TodoItem from './TodoItem';

import './TodoList.css';

const TodoList = ({todos, onRemoveHandler}: any) => {
  return (
    <div className='todoList'>
      {todos.map((todo:string, index:number) => {
        return <TodoItem
          key={index}
          id={index}
          onRemoveHandler={onRemoveHandler}>
          {todo}
        </TodoItem>;
      })}
    </div>
  );
};

export default TodoList;
