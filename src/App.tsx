/* eslint-disable require-jsdoc */
import React from 'react';
import './App.css';

import Header from './components/Header';
import TodoBar from './components/TodoBar';


const App = () => {
  return (
    <div>
      <div className='title'>
        <Header />
      </div>
      <div>
        <TodoBar />
      </div>
    </div>
  );
};

export default App;
