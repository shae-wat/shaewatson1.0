import React, { Component } from 'react';
import classNames from 'classnames';

import './Component1.css';

class Component1 extends Component {
	constructor(props) {
    super(props);
  }

  render() {
    if (this.props.activeTab !== '1') return null;


    return (
      <div>
        Discuss use of Node.js in Selenium Tests, bot/lambda functions
      </div>
    );
  }

}

export default Component1;
