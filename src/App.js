import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Toggle from './components/Toggle.js';
import Component1 from './components/Component1.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: '1' };
  }

  render() {
    return (
      <div className="App">
        <Header
          logo={logo}
        />
        <Toggle 
          tab={this.state.activeTab}
          handleToggle={this.handleToggle}
        />
        <Component1 
          activeTab={this.state.activeTab}
        />
      </div>
    );
  }

  handleToggle = (tab) => {
    this.setState({
      activeTab: tab,
    });
  }
}

export default App;
