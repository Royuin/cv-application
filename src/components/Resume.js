import '../styles/Resume.css';

export default function Resume ({firstName, lastName, email, phone, school, subject, date, jobs}) {

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

  function renderExperience() {
    const jobItems = jobs.map((job) => {
      return (
        <li key={job.id} >
          <div className='company-info'>
            <h4>{job.company}</h4>
            <h5>{job.position}</h5>
          </div>
          <div className='company-date'>
            <p>From: {job.from}</p>
            <p>To: {job.to}</p>
          </div>
        </li>
      );
    }); 
    return <ul>{jobItems}</ul>;
  };

  function renderEducation() {
    return (
      <section className="education">
        <h3>Education:</h3>
        <h4>{school}</h4>
        <h5>{subject}</h5>
        <p>{date}</p>
      </section>
    );
  };

  return (
    <section className="resume">
      {renderGeneralInfo()}
      {renderEducation()}
      <section className='experience'>
        <h3>Work Experience: </h3>
        {renderExperience()}
      </section>
    </section>
  );
}
