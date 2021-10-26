import React, {useState} from 'react';
import './TodoItem.css';


const TodoItem = (props: any) => {
  const [updateTodo, setUpdateTodo] = useState('');

  const handleUpdateTodo = (event: any) => {
    event.preventDefault();
  };
  return (
    <div className='todoItem'>
      {props.children}
      <button className='deleteItemButton'
        type='button'
        onClick={()=> props.onRemoveHandler(props.id)}>X</button>
      <form onSubmit={handleUpdateTodo}>
        <input type= 'text' value ={updateTodo} onChange={(event) => {
          setUpdateTodo(event.target.value);
          console.log('test', handleUpdateTodo);
        }} />
      </form>
      <button type='button' onClick={() => props.editTodo(props.id)}>Edit
      </button>
    </div>
  );
};

export default TodoItem;

