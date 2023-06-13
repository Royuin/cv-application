import React, { Component } from 'react';
import './styles/App.css';
import Info from './components/Info.js';
import Education from './components/Education.js';
import Experience from './components/Experience.js';
import Resume from './components/Resume.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderResume = this.renderResume.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleJobDelete = this.handleJobDelete.bind(this);
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
      jobs: [{ company: '', position: '', from: '', to: '', index: 0 }],
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
    form.style.display = 'grid';
    editBtn.style.display = 'none';
    resume.style.display = 'none';
  };

  setInfoState = () => {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    this.setState({
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
    });
  };

  setJobsState = () => {
    const jobs = this.state.jobs.map((job) => {
      const company = document.getElementById('company' + job.index).value;
      const position = document.getElementById('position' + job.index).value;
      const from = document.getElementById('from' + job.index).value;
      const to = document.getElementById('to' + job.index).value;
      return {
        company,
        position,
        from,
        to,
        index: job.index,
      };
    });
    this.setState({
      jobs: jobs,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const school = document.getElementById('school').value;
    const subject = document.getElementById('subject').value;
    const date = document.getElementById('date').value;
    this.setState({
      school,
      subject,
      date,
    });
    this.setInfoState();
    this.setJobsState();
    this.renderResume();

    const form = document.querySelector('form');
    const editBtn = document.querySelector('.edit-button');
    const resume = document.querySelector('.resume');
    form.style.display = 'none';
    editBtn.style.display = 'block';
    resume.style.display = 'grid';
  };

  handleAdd = () => {
    const job = {
      company: '',
      position: '',
      from: '',
      to: '',
      index: this.state.jobs.length,
    };
    this.setState({
      jobs: this.state.jobs.concat(job),
    });
  };

  handleJobDelete = (index) => {
    const updatedJobs = this.state.jobs.filter((job) => job.index !== index);
    this.setState({
      jobs: updatedJobs,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>CV App</h1>
        <form>
          <Info state={this.state} />
          <Education state={this.state} />
          <Experience
            state={this.state}
            handleJobDelete={this.handleJobDelete}
          />
          <button onClick={this.handleAdd} type="button">
            Add Experience
          </button>

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
