import { Component } from 'react';
class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.state;
    this.renderGeneralInfo = this.renderGeneralInfo.bind(this);
    this.renderExperience = this.renderExperience.bind(this);
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

  render() {
    return (
      <section>
        {this.renderGeneralInfo()}
        {this.renderExperience()}
      </section>
    );
  }
}

export default Resume;
