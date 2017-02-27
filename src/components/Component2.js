import React, { Component } from 'react';
import classNames from 'classnames';

import './Component2.css';

class Component2 extends Component {
	constructor(props) {
    super(props);
  }

  render() {
    if (this.props.activeTab !== '2') return null;

    return (
      <div className='content'>
        Discuss use of Node.js in Selenium Tests, bot/lambda functions
      </div>
    );
  }

}

export default Component2;
