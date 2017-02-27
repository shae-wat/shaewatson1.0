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
          <div className='component1_box info'>
            <b>
              End to end testing.
            </b>  
            <p>
              Node.js, blog
            </p>
            <p>
              Sauce Labs, blog
            </p>
          </div>
          <div className='component1_box'>
            
          </div>
        </div>

        <div className='component1_section'>
          <div className='component1_box'>
            <div className='codeblock'>
              <code>
                this.props.actions.login();
              </code>
               <code>
                dispatch('LOGIN');
              </code>
            </div>
          </div>
          <div className='component1_box info'>
            <b>
              Node.js as scripting language
            </b>  
            <p>
              AWS Lambda
            </p>
            <p>
              Bots
            </p>
          </div>
        </div>

      </div>
    );
  }

}

export default Component2;
