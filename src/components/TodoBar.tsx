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

    todo && setTodos((oldArray:any) => [todo, ...oldArray] );
    setTodo('');
  };

  const onRemoveHandler = () => {
    setTodos((oldArray:any) => {
      console.log('remove');
      return oldArray.filter((todo:string) => todo !== todo);
    });
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
      </form>
      <TodoList todos={todos} onRemoveHandler={onRemoveHandler}/>
    </div>
  );
};

export default TodoBar;


// if (!todo) return;
// eslint-disable-next-line max-len
// todo ? setTodos((oldArray:any) => [todo, ...oldArray] ) : '';
