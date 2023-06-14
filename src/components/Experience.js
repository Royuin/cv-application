import { Component } from 'react';

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.state;
    this.handleJobDelete = this.props.handleJobDelete.bind(this);
  }

  removeJobBtn = (id) => {
    return (
      <button type="button" onClick={() => { 
        this.props.handleJobDelete(id); 
      }}>
        Remove
      </button>
    );
  };

  renderInputs = () => {
    const newJobs = this.props.state.jobs.map((job) => {
      return (
        <li key={job.id}>
          <label htmlFor="company">Company name:</label>
          <input
            id={'company' + job.id}
            type="text"
            name="company"
            defaultValue={job.company}
          ></input>

          <label htmlFor="position">Position title:</label>
          <input id={'position' + job.id} type="text" name="position"></input>

          <label htmlFor="from">From:</label>
          <input id={'from' + job.id} type="tel" name="from"></input>

          <label htmlFor="to">To:</label>
          <input id={'to' + job.id} type="tel" name="to"></input>

          {this.removeJobBtn(job.id)}
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
