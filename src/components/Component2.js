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
      <div>
        Showcase react work (screen shots that link to FS and Civil)
        one paragraph about react/frontend journey
      </div>
    );
  }

}

export default Component2;
