import React from 'react';
import './TodoItem.css';


const Todo = (props:any) => {
  return (
    <div className='todoItem'>
      {props.children}
    </div>

  );
};

export default Todo;
