import React, { Component } from 'react';

import './DropdownComponent.css';

class DropdownComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  render() {
    let options = (
      <DropdownOption
        text='hey0'
      />
    );
    if (this.state.open && this.props.options) {
      options = this.props.options.map((option)=>{
        return (
          <DropdownOption
            text={option.label}
          />
        );
      });

    }

    console.log('options', options);

    return (
      <div className='dropdown-container'>
        {options}
      </div>
    );
  }

}

const DropdownOption = function(props){
  return (
    <div className='option-text'>
      {props.text}
    </div>
  )
}

DropdownComponent.propTypes = {
  options: React.PropTypes.array,
  handleSelect: React.PropTypes.func,
}


export default DropdownComponent;
