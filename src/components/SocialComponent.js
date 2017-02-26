import React, { Component } from 'react';

import './SocialComponent.css';

class SocialComponent extends Component {
  render() {
    return (
      <div className="socialComponent">
      	<div className='socialComponent__github' />
      	<div className='socialComponent__linkedin' />
      	<div className='socialComponent__twitter' />
      </div>
    );
  }
}

export default SocialComponent;
