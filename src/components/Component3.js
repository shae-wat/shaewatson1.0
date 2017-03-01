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
          <div className='component1_box info space-top'>
            <b>
              Everything should look good on everything.
            </b>  
            <p>
              It has always been an expectation in my work to handle page layout across all viewport sizes.

            </p>
            <p>  
              In some cases, the design calls for information to be displayed differently based on the viewport.
              In the associated examples, I made a user interface that does just that.
            </p>
            <p>
              The mobile user is given an option to click <code>READ MORE</code> to show more text content 
              beneath the article title and username.
              The desktop view, in contrast, shows the text content beneath the titles by default.
            </p>
          </div>
          <div className='component1_box'>
            <img className='image' src={require('../images/ui_desktop.png')}/>
            <p className='subtext'>Desktop View</p>
            <img className='image' src={require('../images/ui_mobile.png')}/>
            <p className='subtext'>Mobile View</p>
          </div>
        </div>

      </div>
    );
  }

}

export default Component3;
