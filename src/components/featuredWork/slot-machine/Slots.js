import React from 'react';
import _ from 'lodash';

import './SlotMachine.css';

const Slots = function(props){
  let slots = [];
  for (let i = 0; i < props.numSlots; i++){
    slots.push(
      <Slot
        key={'key'+i}
        options={props.slotOptions[i]}
        selectedOption={props.spinResult[i]}
        spinning={props.spinning[i]}
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

Slots.propTypes = {
  spinning: React.PropTypes.array,
  slotOptions: React.PropTypes.array,
  numSlots: React.PropTypes.number,
  spinResult: React.PropTypes.array,
  handleSpin: React.PropTypes.func,
}

const Slot = function(props){
  if (props.spinning) {
    return (
      <div className='slot spinning-slot'>
        <div className={`image slot-spinning spinning-${_.head(props.options).type}`}/>
      </div>
    );
  }

	let slotResult = _.nth(props.options, props.selectedOption);
  return (
    <div className={`slot color-${slotResult.value}`}>
      <div className={`image slot-image ${slotResult.value}-${slotResult.type}`}/>
    	{slotResult.option}
    </div>
  );
}

Slot.propTypes = {
  options: React.PropTypes.array,
  selectedOption: React.PropTypes.number,
  spinning: React.PropTypes.bool,
}

export default Slots;
