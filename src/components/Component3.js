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
              In some cases, the design calls for information to be displayed differently based on viewport size.
            </p>
            <p>  
              In the examples on the right, the mobile view shows only the article title and the replying commenter's user handle.
              The mobile user is given an option to click <code>READ MORE</code> to show more text content.
              The desktop view, in contrast, shows the text content by default.
            </p>
          </div>
        </div>

      </div>
    );
  }

}

export default Component3;
