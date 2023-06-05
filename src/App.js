import React, { Component } from 'react';
import './App.css';
import Info from './components/Info.js';
import Education from './components/Education.js';
import Experience from './components/Experience.js';
import Resume from './components/Resume.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderResume = this.renderResume.bind(this);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      school: '',
      subject: '',
      date: '',
      company: '',
      position: '',
      from: '',
      to: '',
    };
  }

  renderResume = () => {
    return (
      <>
        <Resume state={this.state} />
      </>
    );
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const school = document.getElementById('school').value;
    const subject = document.getElementById('subject');
    const date = document.getElementById('date').value;
    const company = document.getElementById('company');
    const position = document.getElementById('position').value;
    const from = document.getElementById('from');
    const to = document.getElementById('to');
    this.setState({
      firstName,
      lastName,
      email,
      phone,
      school,
      subject,
      date,
      company,
      position,
      from,
      to,
    });
    this.renderResume();
  };

  render() {
    return (
      <div className="App">
        <h1>CV App</h1>
        <form>
          <Info state={this.state} />
          <Education state={this.state} />
          <Experience state={this.state} />

          <button
            type="submit"
            onClick={(e) => {
              this.handleSubmit(e);
              this.renderResume();
            }}
          >
            Create
          </button>
        </form>
        {this.renderResume()}
      </div>
    );
  }
}

export default App;
