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
            <div className='css-mobile'/>
            <p className='subtext'>Mobile View</p>
            <div className='css-desktop'/>
            <p className='subtext'>Desktop View</p>
          </div>
          <div className='component1_box info'>
            <b>
              Viewport Considerations
            </b>  
            <p>
              I see the work of a front end engineer as the keystone between design and backend functionality.
              It has always been an expectation in my work to handle page layout across all viewport sizes.
            </p>
          </div>
        </div>

      </div>
    );
  }

}

export default Component3;
