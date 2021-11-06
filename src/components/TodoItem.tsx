import React from 'react';
import './TodoItem.css';


const TodoItem = (props: any) => {
  return (
    <div className='todoItem'>
      <p className='textWrapper'>{props.children}</p>
      <button className='deleteItemButton'
        type='button'
        onClick={()=> props.onRemoveHandler(props.id)}><img src="https://img.icons8.com/officexs/16/000000/delete-sign.png"/></button>
    </div>
  );
};

export default TodoItem;

