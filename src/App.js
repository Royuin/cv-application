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

  displayForm = () => {
    const form = document.querySelector('form');
    const editBtn = document.querySelector('.edit-button');
    const resume = document.querySelector('.resume');
    form.style.display = 'block';
    editBtn.style.display = 'none';
    resume.style.display = 'none';
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const school = document.getElementById('school').value;
    const subject = document.getElementById('subject').value;
    const date = document.getElementById('date').value;
    const company = document.getElementById('company').value;
    const position = document.getElementById('position').value;
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
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

    const form = document.querySelector('form');
    const editBtn = document.querySelector('.edit-button');
    const resume = document.querySelector('.resume');
    form.style.display = 'none';
    editBtn.style.display = 'block';
    resume.style.display = 'block';
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
        <button className="edit-button" onClick={this.displayForm}>
          Edit
        </button>
      </div>
    );
  }
}

export default App;
