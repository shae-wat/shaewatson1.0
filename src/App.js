import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/lib/Header.js';
import Toggle from './components/lib/Toggle.js';
import TechBabbleIndex from './components/techBabble/index'
import Component2 from './components/Component2.js';
import Component3 from './components/featuredWork/Component3.js';
import Footer from './components/lib/Footer.js';

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
        <TechBabbleIndex
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
