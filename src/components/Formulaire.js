import React, { Component } from "react";

class Formulaire extends Component {
  state = {
    message: "",
    length: this.props.length
  };

  createMessage = () => {
    const { addMessage, pseudo } = this.props;
    const message = {
      pseudo,
      message: this.state.message
    };
    addMessage(message);
    this.setState({ message: "", length: this.props.length});
  };

  handleChange = event => {
    const message = event.target.value;
    const length = this.props.length - message.length;
    this.setState({ message: message, length: length });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.createMessage();
  };

  handleKeyUp = (event) => {
      if(event.key === 'Enter'){
          this.createMessage()
      }
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <textarea
          required
          onKeyUp={this.handleKeyUp}
          maxLength={this.props.length}
          value={this.state.message}
          onChange={this.handleChange}
        />
        <div className="info">{this.state.length}</div>
        <button type="submit">Envoyer</button>
      </form>
    );
  }
}

export default Formulaire;
