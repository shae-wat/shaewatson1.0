import React, { Component } from 'react';
import classNames from 'classnames';

import './Component.css';

class Component2 extends Component {
	constructor(props) {
    super(props);
  }

  render() {
    if (this.props.activeTab !== '2') return null;

    return (
      <div className='component1_content'>

        <div className='component1_section'>
          <div className='component1_box info space-top'>
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
          <div className='component1_box'>
            <div className='ui-test'/>
            <p className='subtext'>Selenium Test Run on the Sauce Labs Platform</p>
          </div>
        </div>

        <div className='component1_section'>
          <div className='component1_box'>
            <div className='sauce-dash'/>
            <p className='subtext'>A Selenium Test Run Across Multiple Browsers on Sauce Labs</p>
          </div>
          <div className='component1_box info space-top'>
            <b>
              Cross Browser Testing
            </b> 
            <p>
              I took the use of a Javascript webdriver further by running it on a platform 
              that allows for cross browser testing accross multiple platforms.
              This is described in my blog post
              <a 
                href='https://medium.com/@shaewat/multi-platform-user-interface-testing-with-selenium-and-node-js-567b8fb624e8' 
                target='_blank'
                className='space-around'
              >
                Multi-Platform User Interface Testing with Selenium and Node.js
              </a>
              .
            </p>
          </div>
        </div>

      </div>
    );
  }

}

export default Component2;
