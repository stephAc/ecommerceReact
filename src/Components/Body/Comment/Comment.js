import React, { Component } from 'react';
import avatarImg from '../../../assets/img/avatar.png';
import './Comment.css';

const TEXT =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const SHOW_CHAR = 200;
export default class Comment extends Component {
  state = {
    contentText: TEXT,
    hideText: false,
    btnTextValue: '',
  };

  componentDidMount() {
    console.log();
    if (this.state.contentText.length > SHOW_CHAR) {
      this.cutText(this.props.idkey);
      document.getElementById(this.props.idBtn).style.display = 'block';
    }
  }

  handleMoreText = () => {
    if (this.state.hideText) {
      let text = document.getElementById(this.props.idkey);
      text.innerHTML = this.state.contentText;
      this.setState(() => ({
        hideText: false,
        btnTextValue: 'Cacher',
      }));
    } else {
      this.cutText(this.props.idkey);
    }
  };

  cutText = id => {
    let c = this.state.contentText.substr(0, SHOW_CHAR);
    let text = document.getElementById(id);
    let htmlText = c + ' ...';
    text.innerHTML = htmlText;

    this.setState(() => ({
      hideText: true,
      btnTextValue: 'Afficher',
    }));
  };

  render() {
    return (
      <div className="gridComment">
        <div className="authorInfo">
          <img
            className="avatar"
            src={avatarImg}
            alt="Avatar"
            width="50px"
            height="50px"
          />
          <p className="author">MattMattMattMattMattMattMattMattMatt</p>
        </div>
        <div>
          <span className="date">Today at 5:42PM</span>
          <p id={this.props.idkey} />
          <button
            id={this.props.idBtn}
            onClick={this.handleMoreText}
            style={{ display: 'none' }}
            className="btnComment"
          >
            {this.state.btnTextValue}
          </button>
        </div>
      </div>
    );
  }
}
