import React from 'react';
import './PopupMsg.css';

const PopupMsg = props => {
  const showHide = props.showPopup ? 'show' : 'hide';
  return (
    <div onClick={props.hide} className={`${showHide} overlay`}>
      <div className="popup">
        <h2>
          <i className={`${props.title}`} />
        </h2>
        <span onClick={props.hide} className="close">
          &times;
        </span>
        <div className="content">{props.message}</div>
      </div>
    </div>
  );
};

export default PopupMsg;
