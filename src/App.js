import { Component } from 'react';
import './App.css';
import Info from './components/Info.js';
import Education from './components/Education';
import Experience from './components/Experience';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <h1>CV App</h1>
        <form>
          <Info />
          <Education />
          <Experience />
          <button>Create</button>
        </form>
      </div>
    );
  }
}

export default App;
