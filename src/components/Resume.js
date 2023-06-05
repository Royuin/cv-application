import { Component } from 'react';
class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.state;
    this.renderGeneralInfo = this.renderGeneralInfo.bind(this);
    this.renderResume = this.renderResume.bind(this);
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

  renderResume = () => {};

  render() {
    return <section>{this.renderGeneralInfo()}</section>;
  }
}

export default Resume;
