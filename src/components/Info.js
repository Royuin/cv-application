import { Component } from 'react';

class Info extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h2>General Information</h2>
        <label htmlFor="firstName">First Name:</label>
        <input id="firstName" type="text" name="firstName"></input>

        <label htmlFor="lastName">Last Name:</label>
        <input id="lastName" type="text" name="LastName"></input>

        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email"></input>

        <label htmlFor="pNumber">Phone Number:</label>
        <input id="pNumber" type="tel" name="pNumber"></input>
      </>
    );
  }
}

export default Info;
