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
      <div className='content'>
        Showcase react work (screen shots that link to FS and Civil)
        one paragraph about react/frontend journey
      </div>
    );
  }

}

export default Component1;
