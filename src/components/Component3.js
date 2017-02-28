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
          <div className='component1_box info space-top'>
            <b>
              Viewport Considerations
            </b>  
            <p>
              It has always been an expectation in my work to handle page layout across all viewport sizes.
            </p>
            <p>
              In some cases, the design calls for information to be displayed differently based on viewport size.
              In the examples on the right, the mobile view shows only the article title and the replying commenter's handle.
              The user must click <code>READ MORE</code> to expand the more detailed excerpts shown in the desktop view.
            </p>
          </div>
        </div>

      </div>
    );
  }

}

export default Component3;
