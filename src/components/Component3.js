import React, { Component } from 'react';
import classNames from 'classnames';

import './Component3.css';

class Component3 extends Component {
	constructor(props) {
    super(props);
  }

  render() {
    if (this.props.activeTab !== '3') return null;

    return (
      <div>
        talk about design theories/implementation
      </div>
    );
  }

}

export default Component3;
