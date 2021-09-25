import React from 'react';
import './Header.css';

import Date from './Date';

const Header = (props:any) => {
  return (
    <div>
      <header className="header">Todo List</header>
      <Date/>
    </div>
  );
};

export default Header;
