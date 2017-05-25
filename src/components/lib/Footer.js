import React from 'react';
import SocialComponent from './SocialComponent.js';

const Footer = function(props){
  const appFooter = {
    display: 'flex',
    justifyContent: 'space-between',
    background: '#222',
    padding: '10px',
    color: 'white',
  }

  return (
    <div style={appFooter}>
      <SocialComponent />
    </div>
  );
}

export default Footer;
