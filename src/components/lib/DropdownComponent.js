import React, { Component } from 'react';
import _ from 'lodash';
import classNames from 'classnames';

import './DropdownComponent.css';

class DropdownComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  render() {
    let selectedOptionObj = this.props.options[this.props.selectedOption];
    let options = (
      <DropdownOption
        key={_.get(selectedOptionObj, 'value')}
        label={_.get(selectedOptionObj, 'label')}
        handleOpenClick={this.handleOpenClick}
      />
    );

    if (this.state.open && this.props.options) {
      options = this.props.options.map((option)=>{
        return (
          <DropdownOption
            key={option.value}
            label={option.label}
            index={this.props.options.indexOf(option)}
            expanded={true}
            handleSelect={this.handleClick}
          />
        );
      });
    }

    return (
      <div className='dropdown-style'>
        <div
          className='dropdown-container'
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          {options}
        </div>
      </div>
    );
  }

  handleMouseEnter = () => {
    this.setState({ open: true });
  }

  handleMouseLeave = () => {
    this.setState({ open: false });
  }

  handleClick = (e) => {
    console.log('handleClick');
    this.setState({ open: false });
    this.props.handleSelect(parseInt(e.target.id));
  }

  handleOpenClick = () => {
    console.log('handleOpenClick');
    this.setState({ open: true });
  }
}

//=====================================
const DropdownOption = function(props){
  let optionComponent = classNames('option-component', {
    ['option-hover']: props.expanded,
  });

  return (
    <div
      id={props.index}
      className={optionComponent}
      onClick={props.expanded ? props.handleSelect : props.handleOpenClick}
    >
      {props.label}
    </div>
  );
}

DropdownComponent.propTypes = {
  options: React.PropTypes.array,          //elements are objects of form {value: <String>, label: <String>}
  handleSelect: React.PropTypes.func,
  selectedOption: React.PropTypes.number,  //selected index in options
}


export default DropdownComponent;
