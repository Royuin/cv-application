import { Component } from 'react';
class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.state;
  }

  renderGeneralInfo = () => {
    return (
      <section>
        <h3>{this.props.state.firstName}</h3>
        <h3>{this.props.state.lastName}</h3>
        <p>{this.props.state.email}</p>
        <p>{this.props.state.phone}</p>
      </section>
    );
  };

  renderExperience = () => {
    return (
      <section>
        <h3>{this.props.state.company}</h3>
        <h4>{this.props.state.position}</h4>
        <p>{this.props.state.from}</p>
        <p>{this.props.state.to}</p>
      </section>
    );
  };

  renderEducation = () => {
    return (
      <section>
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
