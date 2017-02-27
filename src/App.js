import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Toggle from './components/Toggle.js';
import Component1 from './components/Component1.js';
import Component2 from './components/Component2.js';
import Component3 from './components/Component3.js';
import Footer from './components/Footer.js';

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
        <Component2 
          activeTab={this.state.activeTab}
        />
        <Component3 
          activeTab={this.state.activeTab}
        />
        <Footer />
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
