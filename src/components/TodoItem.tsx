import React from 'react';
import './TodoItem.css';


const TodoItem = (props: any) => {
  return (
    <div className='todoItem'>
      {props.children}
      <button type='button'
        onClick={()=> console.log('props', props)}> x</button>
    </div>
  );
};

export default TodoItem;
