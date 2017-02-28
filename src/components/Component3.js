import React, { Component } from 'react';
import classNames from 'classnames';

import './Component.css';

class Component3 extends Component {
	constructor(props) {
    super(props);
  }

  render() {
    if (this.props.activeTab !== '3') return null;

    return (
      <div className='component1_content'>

        <div className='component1_section'>
          <div className='component1_box'>
            <div className='ui-test'/>
            <p className='subtext'>Selenium Test Run on the Sauce Labs Platform</p>
          </div>
          <div className='component1_box info'>
            <b>
              Implementing Design
            </b>  
            <p>
              In my work as a front end engineer, I see myself as the keystone between the backend and design.
              When implementing a given mock design, I make use of *css flexbox.

            </p>
          </div>
        </div>

        <div className='component1_section'>
          <div className='component1_box info'>
            <b>
              Flexbox and Viewports
            </b>  
            <p>
              It has always been an expectation in my work to handle page layout across all viewport sizes.
              This typically entails flipping the <code>flex-direction</code> property of a list of elements
              from row to column. It is best practice to have font-size reduction defined globally.
            </p>
          </div>
          <div className='component1_box'>
            <div className='ui-test'/>
            <p className='subtext'>Selenium Test Run on the Sauce Labs Platform</p>
          </div>
        </div>

        <div className='component1_section'>
          <div className='component1_box'>
            <div className='ui-test'/>
            <p className='subtext'>Selenium Test Run on the Sauce Labs Platform</p>
          </div>
          <div className='component1_box info'>
            <b>
              SCSS
            </b>  
            <p>
              Allows *nesting of media queries
            </p>
          </div>
        </div>

      </div>
    );
  }

}

export default Component3;
