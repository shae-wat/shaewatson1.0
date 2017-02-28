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
              End to end testing with browser automation
            </b>  
            <p>
              Node.js can be used to implement end to end testing for an application,
              ensuring the health of UI features such as login. 
              I demonstrate the use of selenium's webdriver as a test runner within a Node.js application
              in my blog post
              <a 
                href='https://medium.com/@shaewat/local-user-interface-testing-with-selenium-and-node-js-75be104c729f' 
                target='_blank'
                className='space-around'
              >
                Local User Interface Testing with Selenium and Node.js
              </a>
              .
            </p>
          </div>
        </div>

      </div>
    );
  }

}

export default Component3;
