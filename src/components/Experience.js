export default function Experience({jobs, handleJobDelete}) {

  function removeJobBtn(id) {
    return (
      <button type="button" onClick={() => { 
        handleJobDelete(id); 
      }}>
        Remove
      </button>
    );
  };

  function renderInputs() {
    const newJobs = jobs.map((job) => {
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

          {removeJobBtn(job.id)}
        </li>
      );
    });
    return <ul>{newJobs}</ul>;
  };

  return (
    <>
      <h2>Experience</h2>
      {renderInputs()}
    </>
  );
}
