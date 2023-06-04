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

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="App">
        <h1>CV App</h1>
        <form>
          <Info />
          <Education />
          <Experience />
          <button type="submit" onClick={this.handleSubmit}>
            Create
          </button>
          <Resume />
        </form>
      </div>
    );
  }
}

export default App;
