import React, { useState } from 'react';
import './styles/App.css';
import Info from './components/Info.js';
import Education from './components/Education.js';
import Experience from './components/Experience.js';
import Resume from './components/Resume.js';
import uniqid from 'uniqid';

export default function App() { 
  const [firstName, setFirstName] = useState('');   
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [school, setSchool] = useState('');
  const [subject, setSubject] = useState('');
  const [date, setDate] = useState('');
  const [jobs, setJobs] = useState([{ company: '', position: '', from: '', to: '', id: uniqid(),}])

  function displayForm() {
    const form = document.querySelector('form');
    const editBtn = document.querySelector('.edit-button');
    const resume = document.querySelector('.resume');
    form.style.display = 'grid';
    editBtn.style.display = 'none';
    resume.style.display = 'none';
  };

  function setInfoState() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    setFirstName(firstName)
    setLastName(lastName)
    setEmail(email)
    setPhone(phone)
  };

  function setJobsState() {
    const updatedJobs = jobs.map((job) => {
      const company = document.getElementById('company' + job.id).value;
      const position = document.getElementById('position' + job.id).value;
      const from = document.getElementById('from' + job.id).value;
      const to = document.getElementById('to' + job.id).value;
      return {
        company,
        position,
        from,
        to,
        id: job.id
      };
    });
    setJobs(updatedJobs);
  };

  function handleSubmit(e) {
    e.preventDefault();
    const school = document.getElementById('school').value;
    const subject = document.getElementById('subject').value;
    const date = document.getElementById('date').value;
    setSchool(school);
    setSubject(subject);
    setDate(date);
    setInfoState();
    setJobsState();
    const form = document.querySelector('form');
    const editBtn = document.querySelector('.edit-button');
    const resume = document.querySelector('.resume');
    form.style.display = 'none';
    editBtn.style.display = 'block';
    resume.style.display = 'grid';
  };

  function  handleAdd() {
    const job = {
      company: '',
      position: '',
      from: '',
      to: '',
      id: uniqid(),
    };
    setJobs(previous => [...previous, job])
  };

  function handleJobDelete(id) {
    const updatedJobs = jobs.filter((job) => job.id !== id);
    setJobs(updatedJobs)
  };

  return (
    <div className="App">
      <h1>CV App</h1>
      <form>
        <Info />
        <Education />
        <Experience 
          jobs={jobs}
          handleAdd={handleAdd}
          handleJobDelete={handleJobDelete}
        />
        <button 
          type='button'
          onClick={handleAdd}
        >
          Add
        </button>
        <button
          type="submit"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Create
        </button>
      </form>
      <Resume 
        firstName={firstName}
        lastName={lastName}
        email={email}
        phone={phone}
        school={school}
        subject={subject}
        date={date}
        jobs={jobs}
      />
      <button className="edit-button" onClick={displayForm}>
        Edit
      </button>
    </div>
  );
}
