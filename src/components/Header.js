import React, { Component } from 'react';
import SocialComponent from './SocialComponent.js';

import '../App.css';

class Header extends Component {
  render() {
    return (
      <div className="appHeader">
        <img src={this.props.logo} className="appLogo" alt="logo" />
        <SocialComponent />
      </div>
    );
  }
}

export default Header;
