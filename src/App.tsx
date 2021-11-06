/* eslint-disable require-jsdoc */
import React from 'react';
import './App.css';

import Header from './components/Header';
import TodoBar from './components/TodoBar';


const App = () => {
  return (
    <>
      <div className='card'>
        <div className='title'>
          <Header />
        </div>
        <div className='todoBar'>
          <TodoBar />
        </div>
      </div>

    </>
  );
};

export default App;
