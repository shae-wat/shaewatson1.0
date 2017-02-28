import React, { Component } from 'react';
import classNames from 'classnames';

import './Component.css';

class Component1 extends Component {
	constructor(props) {
    super(props);
  }

  render() {
    if (this.props.activeTab !== '1') return null;

    return (
      <div className='component1_content'>

        <div className='component1_section'>
          <div className='component1_box'>
            <div className='monster'/>
            <p className='subtext'>Animated Component</p>
          </div>
          <div className='component1_box info'>
            <b>
              The best part of React is thinking in React.
            </b>  
            <p>
              An organized way to build a single page application is to break the user interface
              into a hierarchy of independent and customizable parts.
              React accomplishes this through its use of components.
            </p>
            <p>
              It's very satisfying to build a component that will be used repeatedly throughout an app
              and to extend the functionality of a complicated component in a controlled way.
            </p>
          </div>
        </div>

        <div className='component1_section'>
          <div className='component1_box info'>
            <b>
              Redux organizes app state.
            </b>  
            <p>
              Redux stores the state of an application as an object tree, defining a single source of truth for that app.
              This store can be referenced by React components as read-only props.
              Actions can update the store by dispatching calls to pure functions that post updates to the store.
            </p>
            <p>
              Actions can be evoked when a component loads or can be called after a specific user interaction.
              Testing an application with a Redux store is accomplished by writing tests for the actions and reducers of the app.
            </p>
          </div>
          <div className='component1_box codebox'>
            <div className='codeblock'>
              <code>
                this.props.actions.login();
              </code>
               <code>
                dispatch('LOGIN');
              </code>
              <code>
                test.it('actions: log in', this.props.actions.login());
              </code>
               <code>
                test.it('reducers: log in', dispatch('LOGIN'));
              </code>
            </div>
          </div>
        </div>

        <div className='component1_section_box'>
          <p>
            As a front end engineer, I have worked on teams building React/Redux applications since July 2015. 
          </p>
          <p>
            I have contributed to consumer and admin-facing applications at 
            <a 
              href='https://beta.flightstats.com/flight-tracker/search' 
              target='_blank'
              className='space-around'
            >
              FlightStats, Inc. 
            </a>
            and 
            <a 
              href='https://www.getcivil.com/' 
              target='_blank'
              className='space-around'
            >
              Civil Co.
            </a>
          </p>
        </div>


        <div className='component1_section_box'>
          I lead monthly React.js
          <a 
            href='https://github.com/shae-wat/react-workshops' 
            target='_blank'
            className='space-around'
          >
          workshops
          </a>
          for Women Who Code Portland.
        </div>

      </div>
    );
  }

}

export default Component1;
