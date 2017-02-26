import React, { Component } from 'react';

import '../App.css';

class Header extends Component {
  render() {
    return (
      <div className="appHeader">
        <img src={this.props.logo} className="appLogo" alt="logo" />
        <h2>
        	github
        </h2>
      </div>
    );
  }
}

export default Header;
