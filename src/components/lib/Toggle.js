import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

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
            text='Featured Work'
            handleClick={this.props.handleToggle}
          />
          <TabButton
            id='2'
            tab={this.props.tab}
            text='Current Work'
            handleClick={this.props.handleToggle}
          />
          <TabButton
            id='3'
            tab={this.props.tab}
            text='Tech Babble'
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

const TabButton = function(props){
  let isSelected = (props.tab === props.id);

  return (
    <div onClick={()=>props.handleClick(props.id)}
      className={classNames('tab', {['tabActive']: isSelected})}>
      {props.text}
    </div>
  );
}

TabButton.propTypes = {
  tab: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Toggle;
