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
            optionHoverColor={this.props.optionHoverColor}
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
    this.setState({ open: false });
    this.props.handleSelect(parseInt(e.target.id));
  }

  handleOpenClick = () => {
    this.setState({ open: true });
  }
}
DropdownComponent.propTypes = {
  options: React.PropTypes.array.isRequired, //elements are objects of form {value: <String>, label: <String>}
  optionHoverColor: React.PropTypes.string.isRequired,
  handleSelect: React.PropTypes.func.isRequired,
  selectedOption: React.PropTypes.number.isRequired,  //selected index in options
}
DropdownComponent.defaultProps = {
  optionHoverColor: '#FFB6C1',
}


class DropdownOption extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hovered: false,
    };
  }

  render() {
    let optionHoverStyle = {
      cursor: 'pointer',
    };
    if (this.state.hovered && this.props.expanded){
      optionHoverStyle = {
        backgroundColor: this.props.optionHoverColor,
        color: '#f7f7f7',
        cursor: 'pointer',
      };
    }

    const toggleHover = () => {
      this.setState({hovered: !this.state.hovered})
    };

    return (
      <div
        id={this.props.index}
        className={'option-component'}
        style={optionHoverStyle}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
        onClick={this.props.expanded ? this.props.handleSelect : this.props.handleOpenClick}
      >
        {this.props.label}
        {!this.props.expanded &&
          <div className='option-component-closed-caret'>v</div>
        }
      </div>
    );
  }
}
DropdownOption.propTypes = {
  index: React.PropTypes.number.isRequired,
  label: React.PropTypes.string.isRequired,
  expanded: React.PropTypes.bool,
  optionHoverColor: React.PropTypes.string.isRequired,
  handleSelect: React.PropTypes.func,
  handleOpenClick: React.PropTypes.func,
}


export default DropdownComponent;
