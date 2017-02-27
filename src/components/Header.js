import React, { Component } from 'react';
import SocialComponent from './SocialComponent.js';

import '../App.css';

class Header extends Component {
  render() {
    return (
      <div className="appHeader">
	      <div className="headline">
	        <img src={this.props.logo} className="appLogo" alt="logo" />
	        <h1>Shaelyn Watson</h1>
        </div>
        <SocialComponent />
      </div>
    );
  }
}

export default Header;
