/* eslint-disable require-jsdoc */
import React from 'react';
import './App.css';

import AddTask from './components/AddTask';
import RemoveTask from './components/RemoveTask';

function App() {
  return (
    <div className="App">
      <h1> To do list </h1>
      <div>
        <AddTask />
        <RemoveTask />
      </div>

    </div>
  );
}

export default App;
