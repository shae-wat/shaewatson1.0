import React, { Component } from 'react';
import _ from 'lodash';

import './SlotMachine.css';

class Slot extends Component {
  render() {
    if (this.props.spinning) {
      return (
        <div className='slot spinning-slot'>
          <div className={`image slot-spinning spinning-${_.head(this.props.options).type}`}/>
        </div>
      );
    }

  	let slotResult = _.nth(this.props.options, this.props.selectedOption);
    return (
      <div className={`slot color-${slotResult.value}`}>
        <div className={`image slot-image ${slotResult.value}-${slotResult.type}`}/>
      	{slotResult.option}
      </div>
    );
  }


}

Slot.propTypes = {
  options: React.PropTypes.array,
  selectedOption: React.PropTypes.number,
  spinning: React.PropTypes.bool,
}

export default Slot;
