import { Component } from 'react';
import '../styles/Resume.css';

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.state;
  }

  renderGeneralInfo = () => {
    return (
      <section className="general-info">
        <h2 className="name">
          {this.props.state.firstName} {this.props.state.lastName}
        </h2>
        <p className="email">{this.props.state.email}</p>
        <p className="phone">{this.props.state.phone}</p>
      </section>
    );
  };

  renderExperience = () => {
    const jobItems = this.props.state.jobs.map((job) => {
      return (
        <li key={job.id} >
          <h4>{job.company}</h4>
          <h5>{job.position}</h5>
          <p>From: {job.from}</p>
          <p>To: {job.to}</p>
        </li>
      );
    }); 
    return <ul>{jobItems}</ul>;

  };

  renderEducation = () => {
    return (
      <section className="education">
        <h3>Education:</h3>
        <h4>{this.props.state.school}</h4>
        <h5>{this.props.state.subject}</h5>
        <p>{this.props.state.date}</p>
      </section>
    );
  };

  render() {
    return (
      <section className="resume">
        {this.renderGeneralInfo()}
        <section>
          <h3>Work Experience: </h3>
          {this.renderExperience()}
        </section>
        {this.renderEducation()}
      </section>
    );
  }
}

export default Resume;
