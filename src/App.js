import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Shae Watson: Front End Engineer</h2>
        </div>
        <p className="App-intro">
          <code>Node.js, Javascript, React.js, Redux => medium.com/@shaewat</code>
        </p>
      </div>
    );
  }
}

export default App;
