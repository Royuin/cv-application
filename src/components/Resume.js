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
    return (
      <section className="experience">
        <h3>Work Experience</h3>
        <h4>{this.props.state.company}</h4>
        <h5>{this.props.state.position}</h5>
        <p>From: {this.props.state.from}</p>
        <p>To: {this.props.state.to}</p>
      </section>
    );
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
        {this.renderExperience()}
        {this.renderEducation()}
      </section>
    );
  }
}

export default Resume;
