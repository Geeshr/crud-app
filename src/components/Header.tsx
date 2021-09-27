import React from 'react';
import './Header.css';

import Date from './Date';

const Header = (props:any) => {
  return (
    <>
      <header className="header">Todo List</header>
      <div className="subTitle">
        <Date />
      </div>
    </>
  );
};

export default Header;
