import React, {useEffect, useState} from 'react';
import TodoList from './TodoList';

import './TodoBar.css';


const TodoBar = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const onSubmit = (event : any) => {
    event.preventDefault();

    todo && setTodos((prevTodos:any) => [todo, ...prevTodos] );
    setTodo('');
  };

  const onRemoveHandler = (id:number) => {
    setTodos((prevTodos:any) => {
      const test = prevTodos.filter((t:string, index:number) =>
        index !== id);
      return test;
    });
  };

  const onDeleteAll = () => {
    setTodos([]);
    console.log('test');
  };

  return (
    <div className='todoBody'>
      <form className= 'form' onSubmit={onSubmit}>
        <input
          className='input'
          type = "text"
          value={todo}
          onChange={(event) => {
            setTodo(event.target.value);
          }} />
        <button
          className ='button'
          type='submit'>+</button>
        <button className='deleteAllButton'
          type='button'
          onClick={onDeleteAll}><img src="https://img.icons8.com/material-outlined/24/000000/trash--v1.png"/></button>
      </form>
      <TodoList todos={todos} onRemoveHandler={onRemoveHandler}/>
    </div>
  );
};

export default TodoBar;


// if (!todo) return;
// eslint-disable-next-line max-len
// todo ? setTodos((prevTodos:any) => [todo, ...prevTodos] ) : '';
// <img src="https://img.icons8.com/material-outlined/24/000000/trash--v1.png"/>
