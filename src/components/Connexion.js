import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Connexion extends Component {
  state = {
    pseudo: "",
    goToChat: false
  };

  handleChange = event => {
    const pseudo = event.target.value;
    this.setState({ pseudo: pseudo });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ goToChat: true });
  };

  render() {
    const { pseudo, goToChat } = this.state;
    if (goToChat) {
      return <Redirect push to={`/pseudo/${pseudo}`} />;
    }
    return (
      <div className="connexionBox">
        <form className="connexion" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="pseudo"
            value={pseudo}
            onChange={this.handleChange}
            required
          />
          <button type="submit">GO</button>
        </form>
      </div>
    );
  }
}

export default Connexion;
