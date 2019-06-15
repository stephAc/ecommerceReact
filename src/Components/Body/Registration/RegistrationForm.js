import React from "react";
import './RegistrationForm.css';

export default class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      surname: "",
      name: "",
      email: "",
      password: "",
      passwordConfirmation: ""
    }
  }

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });

    const pattern = /^([a-zA-Z0-9.-]+)@([a-zA-Z0-9-]+)\.([a-zA-Z]{2,4})$/;
    // ([a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]{2,4}) : test@test.com
    // ([a-zA-Z0-9]+)\.([a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]{2,4}) : test.test@test.com

    if (pattern.test(value)) {
      event.target.style.color = "red";
    } else {
      event.target.style.color = "black";
    }
  };

  handleChangeText = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });

    const pattern = /^([a-zA-Z]+)((-)?|(\s)+)([a-zA-Z]+)$/;

    if (pattern.test(value)) {
      event.target.style.color = "red";
    } else {
      event.target.style.color = "black";
    }
  };

  render() {
    return (
      <form className="form">
        <div className="form-group">
          <label htmlFor="surname">Nom</label>
          <input type="text" className="form-control" id="surname" aria-describedby="" placeholder="Tapez votre nom"
                 onInput={this.handleChangeText}/>
        </div>
        <div className="form-group">
          <label htmlFor="name">Prénom</label>
          <input type="text" className="form-control" id="name" aria-describedby="" placeholder="Tapez votre prénom"
                 onChange={this.handleChangeText}/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Adresse e-mail</label>
          <input type="email" className="form-control" id="email" aria-describedby=""
                 placeholder="Tapez votre adresse e-mail" onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input type="password" className="form-control" id="password" aria-describedby=""
                 placeholder="Tapez votre mot de passe" onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="password-confirmation">Confirmation du mot de passe</label>
          <input type="password" className="form-control" id="password-confirmation" aria-describedby=""
                 placeholder="Confirmez votre mot de passe" onChange={this.handleChange}/>
        </div>
        <button>Suivant</button>
      </form>
    );
  }
}