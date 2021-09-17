import React, {useState} from 'react';
import TodoList from './TodoList';


const TodoBar = (props:any) => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([] as any);

  const onSubmit = (event : any) => {
    event.preventDefault();
    // if (!todo) return;
    // eslint-disable-next-line max-len
    // todo ? setTodos((oldArray:any) => [todo, ...oldArray] ) : '';
    todo && setTodos((oldArray:any) => [todo, ...oldArray] );
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type = "text" value={todo} onChange={(event) => {
          setTodo(event.target.value);
        }} />
        <button type='submit'>Add</button>
      </form>
      <TodoList todos={todos}/>
    </div>
  );
};

export default TodoBar;
