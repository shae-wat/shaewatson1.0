import React, { Component } from 'react';
import classNames from 'classnames';

import './Component1.css';

class Component1 extends Component {
	constructor(props) {
    super(props);
    this.state = { shouldShake: false };
  }

  render() {
    console.log('props.activeTab', this.props.activeTab)
    if (this.props.activeTab !== '1') return null;

    let monster = classNames('Component2__monster', {
      ['headShake']: this.state.shouldShake,
    });

    return (
      <div>
        <div className={monster} onClick={this.shake}/>
      </div>
    );
  }

  shake = () => {
  	this.setState({
      shouldShake: true,
    });
    setTimeout(()=>{
      this.setState({
	      shouldShake: false,
	    });
    }, 2000);
  }

}

export default Component1;
