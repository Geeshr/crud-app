import React from 'react';
import './TodoItem.css';


const TodoItem = (props: any) => {
  return (
    <div className='todoItem'>
      {props.children}
      <button className='deleteItemButton'
        type='button'
        onClick={()=> props.onRemoveHandler(props.id)}>X</button>
    </div>
  );
};

export default TodoItem;

