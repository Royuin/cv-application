import React, { useState } from 'react';
import './styles/App.css';
import Info from './components/Info.js';
import Education from './components/Education.js';
import Experience from './components/Experience.js';
import Resume from './components/Resume.js';
import uniqid from 'uniqid';

function App() { 
  const [firstName, setFirstName] = useState('');   
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [school, setSchool] = useState('');
  const [subject, setSubject] = useState('');
  const [date, useDate] = useState('');
  const [jobs, useJobs] = useState([{ company: '', position: '', from: '', to: '', id: uniqid(),}])
  // this.handleSubmit = this.handleSubmit.bind(this);
  //   this.handleAdd = this.handleAdd.bind(this);
  //   this.handleJobDelete = this.handleJobDelete.bind(this);
  //   this.state = {
  //     firstName: '',
  //     lastName: '',
  //     email: '',
  //     phone: '',
  //     school: '',
  //     subject: '',
  //     date: '',
  //     jobs: [{ company: '', position: '', from: '', to: '', id: uniqid(),}],
  //   };

  // displayForm = () => {
  //   const form = document.querySelector('form');
  //   const editBtn = document.querySelector('.edit-button');
  //   const resume = document.querySelector('.resume');
  //   form.style.display = 'grid';
  //   editBtn.style.display = 'none';
  //   resume.style.display = 'none';
  // };

  const setInfoState = () => {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    setFirstName(firstName)
    setLastName(lastName)
    setEmail(email)
    setPhone(phone)
  };

  // setJobsState = () => {
  //   const jobs = this.state.jobs.map((job) => {
  //     const company = document.getElementById('company' + job.id).value;
  //     const position = document.getElementById('position' + job.id).value;
  //     const from = document.getElementById('from' + job.id).value;
  //     const to = document.getElementById('to' + job.id).value;
  //     return {
  //       company,
  //       position,
  //       from,
  //       to,
  //       id: job.id
  //     };
  //   });
  //   this.setState({
  //     jobs: jobs,
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const school = document.getElementById('school').value;
    // const subject = document.getElementById('subject').value;
    // const date = document.getElementById('date').value;
    // this.setState({
    //   school,
    //   subject,
    //   date,
    // });
    setInfoState();
    // this.setJobsState();

    const form = document.querySelector('form');
    const editBtn = document.querySelector('.edit-button');
    const resume = document.querySelector('.resume');
    form.style.display = 'none';
    editBtn.style.display = 'block';
    resume.style.display = 'grid';
  };

  // handleAdd = () => {
  //   const job = {
  //     company: '',
  //     position: '',
  //     from: '',
  //     to: '',
  //     id: uniqid(),
  //   };
  //   this.setState({
  //     jobs: this.state.jobs.concat(job),
  //   });
  // };

  // handleJobDelete = (id) => {
  //   const updatedJobs = this.state.jobs.filter((job) => job.id !== id);
  //   this.setState({
  //     jobs: updatedJobs,
  //   });
  // };


  // <Info  />
  // <Education  />
  // <Experience
  // />
  // <button type="button">
  //   Add Experience
  // </button>

  // <Resume state={this.state} />
  <button className="edit-button" onClick={this.displayForm}>
    Edit
  </button>


  return (
    <div className="App">
      <h1>CV App</h1>
      <form>
        <Info />
        <button
          type="submit"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Create
        </button>
        <Resume 
          firstName={firstName}
          lastName={lastName}
          email={email}
          phone={phone}
        />
      </form>
    </div>
  );

}

export default App;
