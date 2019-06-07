import React from 'react';
import './ConnectedBtn.css';

const ConnectedBtn = () => {
  return (
    <div className="dropdown">
      <button className="dropbtn">
        <i
          className="fas fa-user-circle "
          style={{ marginRight: 5, fontSize: 20 }}
        />
        <i className="fa fa-caret-down" />
      </button>
      <div className="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
  );
};

export default ConnectedBtn;
