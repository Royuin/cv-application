import { Component } from 'react';

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.state;
  }

  renderInputs = () => {
    return (
      <li>
        <label htmlFor="company">Company name:</label>
        <input id="company" type="text" name="company"></input>

        <label htmlFor="position">Position title:</label>
        <input id="position" type="text" name="position"></input>

        <label htmlFor="from">From:</label>
        <input id="from" type="tel" name="from"></input>

        <label htmlFor="to">To:</label>
        <input id="to" type="tel" name="to"></input>
      </li>
    );
  };

  render() {
    return (
      <>
        <h2>Experience</h2>
        {this.renderInputs()}
        <button type="button">Add</button>
      </>
    );
  }
}

export default Experience;
