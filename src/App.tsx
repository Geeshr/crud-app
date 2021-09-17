/* eslint-disable require-jsdoc */
import React from 'react';
import './App.css';

import Header from './components/Header';
import TodoBar from './components/TodoBar';


const App = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="App">
        <TodoBar />
      </div>
    </div>
  );
};

export default App;
