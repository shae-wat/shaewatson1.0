import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import TabButton from './TabButton.js';

import './Toggle.css';

class Toggle extends Component {
  render() {
    let tabBackground = classNames('tabBackground', {
      ['middleActive']: this.props.tab === '2',
      ['lastActive']: this.props.tab === '3',
    });

    return (
      <div className='toggleContainer'>
        <div className='tabBar'>
          <TabButton
            id='1'
            tab={this.props.tab}
            text='React/Redux'
            handleClick={this.props.handleToggle}
          />
          <TabButton
            id='2'
            tab={this.props.tab}
            text='Node.js/Javascript'
            handleClick={this.props.handleToggle}
          />
          <TabButton
            id='3'
            tab={this.props.tab}
            text='CSS/Design'
            handleClick={this.props.handleToggle}
          />
          <div className={tabBackground}></div>
        </div>
      </div>
    );
  }
}

Toggle.propTypes = {
  tab: PropTypes.string.isRequired,
  handleToggle: PropTypes.func.isRequired,
};

export default Toggle;
