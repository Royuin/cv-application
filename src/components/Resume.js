import { Component } from 'react';
class Resume extends Component {
  constructor(props) {
    super(props);
    this.renderGeneralInfo = this.renderGeneralInfo.bind(this);
    this.renderEducation = this.renderEducation.bind(this);
    this.renderExperience = this.renderExperience.bind(this);
    this.renderResume = this.renderResume.bind(this);
  }

  renderGeneralInfo = () => {
    const firstNameValue = document.getElementById('firstName').value;
    const lastNameValue = document.getElementById('lastName').value;
    const emailValue = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
  }

  renderEducation = () => {
    const school = document.getElementById('school').value;
    const subject = document.getElementById('subject').value;
    const date = document.getElementById('date').value;
  }

  renderExperience = () => {
    const company = document.getElementById('company').value;
    const position = document.getElementById('position').value;
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
  }

  renderResume = () => { 

};
  
  render() {
    return;
  }
}

export default Resume;
