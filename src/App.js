import { Component } from 'react';
import './App.css';
import Info from './components/Info.js';
import Education from './components/Education';
import Experience from './components/Experience';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      school: '',
      subject: '',
      date: '',
      company: '',
      position: '',
      from: '',
      to: '',
    };
  }

  render() {
    return (
      <div className="App">
        <h1>CV App</h1>
        <form>
          <Info />
          <Education />
          <Experience />
          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
}

export default App;
