import React, { Component } from 'react';

import './SocialComponent.css';

class SocialComponent extends Component {
  render() {
    return (
      <div className="socialComponent">
      	<a
      		className='socialComponent__github'
      		href='https://github.com/shae-wat'
      		target='_blank'
  		  />
        <a
          className='socialComponent__linkedin'
          href='https://www.linkedin.com/in/shaelynwatson/'
          target='_blank'
        />
        <a
          className='socialComponent__twitter'
          href='https://twitter.com/sjw962'
          target='_blank'
        />
        <a
          className='socialComponent__medium'
          href='https://medium.com/@shaewat' 
          target='_blank'
        />
      </div>
    );
  }
}

export default SocialComponent;
