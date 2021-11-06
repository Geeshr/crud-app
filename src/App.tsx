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
      <div id="clouds">
        <div className="cloud x1"></div>
        <div className="cloud x2"></div>
        <div className="cloud x3"></div>
        <div className="cloud x4"></div>
        <div className="cloud x5"></div>
      </div>
    </>
  );
};

export default App;
