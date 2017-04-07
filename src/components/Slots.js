import React, { Component } from 'react';
import _ from 'lodash';

import Slot from './Slot.js';
import Button from './Button.js';

import '../App.css';

class Slots extends Component {
  render() {
    let slots = [];
    for (let i = 0; i < this.props.numSlots; i++){
      slots.push(
        <Slot
          key={'key'+i}
          options={this.props.slotOptions[i]}
          selectedOption={this.props.spinResult[i]}
          spinning={this.props.spinning[i]}
        />
      );
    }

    return (
      <section className='slots-interface'>
        <section className='slots'>
          {slots}
        </section>
      </section>
    );
  }


}

Slots.propTypes = {
  spinning: React.PropTypes.array,
  slotOptions: React.PropTypes.array,
  numSlots: React.PropTypes.number,
  spinResult: React.PropTypes.array,
  handleSpin: React.PropTypes.func,
}

export default Slots;
