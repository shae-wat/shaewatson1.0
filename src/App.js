import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/lib/Header.js'
import Toggle from './components/lib/Toggle.js'
import CurrentWorkIndex from './components/currentWork/CurrentWorkIndex.js'
import FeaturedWorkIndex from './components/featuredWork/FeaturedWorkIndex.js'
import TechBabbleIndex from './components/techBabble/TechBabbleIndex'

import Footer from './components/lib/Footer.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { activeTab: 1 }
  }

  render() {
    return (
      <div className="App">
        <Header logo={logo} />
        <Toggle tab={this.state.activeTab} handleToggle={this.handleToggle} />
        <CurrentWorkIndex activeTab={this.state.activeTab} />
        <FeaturedWorkIndex activeTab={this.state.activeTab} />
        <TechBabbleIndex activeTab={this.state.activeTab} />
        <Toggle tab={this.state.activeTab} handleToggle={this.handleToggle} />
        <Footer />
      </div>
    )
  }

  handleToggle = tab => {
    this.setState({
      activeTab: tab,
    })
  }
}

export default App
