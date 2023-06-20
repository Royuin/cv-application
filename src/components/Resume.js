import { Component } from 'react';
import '../styles/Resume.css';

export default function Resume ({firstName, lastName, email, phone}) {

  function renderGeneralInfo () {
    return (
      <section className="general-info">
        <h2 className="name">
          {firstName} {lastName}
        </h2>
        <p className="email">{email}</p>
        <p className="phone">{phone}</p>
      </section>
    );
  };

  // renderExperience = () => {
  //   const jobItems = this.props.state.jobs.map((job) => {
  //     return (
  //       <li key={job.id} >
  //         <div className='company-info'>
  //         <h4>{job.company}</h4>
  //         <h5>{job.position}</h5>
  //         </div>
  //         <div className='company-date'>
  //         <p>From: {job.from}</p>
  //         <p>To: {job.to}</p>
  //         </div>
  //       </li>
  //     );
  //   }); 
  //   return <ul>{jobItems}</ul>;
  // };

  // renderEducation = () => {
  //   return (
  //     <section className="education">
  //       <h3>Education:</h3>
  //       <h4>{this.props.state.school}</h4>
  //       <h5>{this.props.state.subject}</h5>
  //       <p>{this.props.state.date}</p>
  //     </section>
  //   );
  // };

  // {this.renderExperience()}
  // {this.renderEducation()}

  return (
    <section className="resume">
      {renderGeneralInfo()}
      <section className='experience'>
        <h3>Work Experience: </h3>
      </section>
    </section>
  );
}
