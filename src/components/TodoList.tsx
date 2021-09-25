import React from 'react';
import TodoItem from './TodoItem';

import './TodoList.css';

const TodoList = ({todos}: any, {onRemoveHandler} : any) => {
  return (
    <div className='todoList'>
      {console.log(onRemoveHandler)}
      {todos.map((todo:string, index:number) => {
        return <TodoItem
          key={index}
          onRemoveHandler={onRemoveHandler}>
          {todo}
        </TodoItem>;
      })}
    </div>
  );
};

export default TodoList;
