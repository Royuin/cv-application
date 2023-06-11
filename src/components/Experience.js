import { Component } from 'react';

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.state;
    this.handleAdd = this.props.handleAdd.bind(this);
  }

  renderInputs = () => {
    const newJobs = this.props.state.jobs.map((job) => {
      const index = job.index;
      return (
        <li id={job.index} key={job.index}>
          <label htmlFor="company">Company name:</label>
          <input
            id={'company' +  index}
            type="text"
            name="company"
            defaultValue={job.company}
          ></input>

          <label htmlFor="position">Position title:</label>
          <input
            id={'position' + index}
            type="text"
            name="position"
          ></input>

          <label htmlFor="from">From:</label>
          <input id={'from' + index} type="tel" name="from"></input>

          <label htmlFor="to">To:</label>
          <input id={'to' + index} type="tel" name="to"></input>
        </li>
      );
    });
    return <ul>{newJobs}</ul>;
  };

  render() {
    return (
      <>
        <h2>Experience</h2>
        {this.renderInputs()}
      </>
    );
  }
}

export default Experience;
