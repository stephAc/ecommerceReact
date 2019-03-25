import React from 'react';
import avatarImg from '../../../assets/img/avatar.png';
import './Comment.css';

const Comment = () => {
  return (
    <div className="comment">
      <img className="avatar" src={avatarImg} />
      <div className="content">
        <a className="author">Matt</a>
        <div className="metadata">
          <span className="date">Today at 5:42PM</span>
        </div>
        <div className="text">How artistic!</div>
      </div>
    </div>
  );
};

export default Comment;
