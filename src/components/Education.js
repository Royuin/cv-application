import { Component } from 'react';

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h2>Education</h2>
        <label htmlFor="school">School:</label>
        <input id="school" type="text" name="school"></input>

        <label htmlFor="subject">Subject:</label>
        <input id="subject" type="text" name="subject"></input>

        <label htmlFor="date">Date of study:</label>
        <input id="date" type="text" name="date"></input>
      </>
    );
  }
}

export default Education;
