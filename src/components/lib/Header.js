import React from 'react';
import SocialComponent from './SocialComponent.js';

import '../../App.css';

const Header = function(props){
  return (
    <div className="appHeader">
      <div className="headline">
        <img src={props.logo} className="appLogo" alt="logo" />
        <h1>Shaelyn Watson</h1>
      </div>
      <SocialComponent />
    </div>
  );
}

export default Header;
