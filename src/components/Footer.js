import React, { Component } from 'react';
import SocialComponent from './SocialComponent.js';

import '../App.css';

class Footer extends Component {
  render() {
    return (
      <div className="appFooter">
        <SocialComponent />
      </div>
    );
  }
}

export default Footer;
