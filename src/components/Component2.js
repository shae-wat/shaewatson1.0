import React, { Component } from 'react';
import classNames from 'classnames';
import Gist from './lib/EmbeddedGist.js';

import './Component.css';

class Component2 extends Component {
	constructor(props) {
    super(props);
  }

  render() {
    if (this.props.activeTab !== '2') return null;

    return (
      <div className='component_content'>

        <section className='component_section'>
          <div className='component_gisttext_box_lg info'>
            <b>
              End to end testing is accomplished with browser automation.
            </b>
            <p>
              Javascript can be used to implement end to end testing for an application,
              ensuring the health of interface features such as login.
            </p>
            <p>
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
            <img
							className='image image-padding-top'
							src={require('../images/ui_test.png')}
							role='presentation'
						/>
            <p className='subtext'>Sauce Labs Test Results</p>
          </div>
          <div className='component_gist_box_lg full-width-mobile'>
            <div className='space-top-sm' />
            <Gist gist="shae-wat/7c485b3e2ceb844433358de3694821e7" />
            <p className='subtext'>Selenium Test for Login Functionality</p>
          </div>
        </section>

        <section className='component_section section_wrap_reverse'>
          <div className='component_gist_box_lg full-width-mobile'>
            <Gist gist="shae-wat/7e795a66676492a324b53ef9bebe27f0" />
            <p className='subtext'>Multi-Platform User Interface Testing with Selenium and Node.js</p>
          </div>
          <div className='component_gisttext_box_lg info space-top'>
            <b>
              End to end testing is most powerful when it runs across the defined
							supported browsers and platforms for an app.
            </b>
            <p>
              I took the use of a Javascript webdriver further by connecting it to the
							Sauce Labs platform, allowing for cross-browser testing spanning multiple platforms.
							In this way, one can test updates across defined supported browsers before
							deployment.
            </p>
            <p>
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
            <img
							className='image image-padding-top'
							src={require('../images/sauce_dashboard.png')}
							role='presentation'
						/>
            <p className='subtext'>Sauce Labs Cross Browser Test Results</p>
          </div>
        </section>

        <section className='component_section'>
          <div className='component_gisttext_box info space-top'>
            <b>
              A Javascript-loving bot can run end to end tests.
            </b>
            <p>
              The Civil Slack had a bot that could run Javascript and import npm packages.
              I trained it to kick off test runs for the multi-platform selenium tests
              from Slack with the command <code>run sauce</code>.
              Internally, this command would run the script that kicks off a Codeship build.
            </p>
            <p>
              The script shown here kicked off end to end testing on the Sauce Labs platform.
							It is configured to run a desired test suite based on parameters
							requested of the user by the bot.
            </p>
          </div>
          <div className='component_gist_box full-width-mobile'>
            <Gist gist="shae-wat/7648aee013a49e4b1a296e3cddd637e7" />
            <p className='subtext'>Script that kicks off Codeship build for Slack Bot </p>
          </div>
        </section>

      </div>
    );
  }

}

export default Component2;
