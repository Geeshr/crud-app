import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({todos}: any) => {
  return (
    <>
      {todos.map((todo:string, index:number) => {
        return <TodoItem key={index}>{todo}</TodoItem>;
      })}
    </>
  );
};

export default TodoList;
