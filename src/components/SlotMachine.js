import React, { Component } from 'react';
import _ from 'lodash';

import Slots from './Slots.js';
import Button from './Button.js';
import '../App.css';

class SlotMachine extends Component {
  constructor(props) {
    super(props);

    this.state = {
      spinResult: this.getResult(),
      spinning: _.fill(Array(this.props.numSlots), false),
      showResult: false,
    };
  }

  render() {
    let message = (<h2>Spin to win a drink!</h2>);
    if (_.last(this.state.spinning)) {
      message = (<h2>Spinning...</h2>);
    }
    if (this.state.showResult){
      switch (_.uniq(this.state.spinResult).length) {
        case 1:
          let drink = `
            a cup of
            ${_.nth(_.head(this.props.slotOptions), _.head(this.state.spinResult)).value}
          `.trim();
          let winningExclaimation = `You just won ${drink}!`
          let winningStatement = `All the components of the drink aligned, which means you get ${drink}!`
          message = (
            <div>
              <h2>
                {winningExclaimation}
              </h2>
              <p>
               {winningStatement}
              </p>
            </div>
          );
          break;
        default:
          message = (
            <div>
              <h3>
                Better luck next time!
              </h3>
              <p>
                More components need to align in order to win a drink.
              </p>
            </div>
          );
          break;
      }
    }

    return (
      <section>
        <Slots
          spinning={this.state.spinning}
          slotOptions={this.props.slotOptions}
          numSlots={this.props.numSlots}
          spinResult={this.state.spinResult}
          handleSpin={this.handleSpin}
          showResult={this.state.showResult}
        />
        <section className='interface'>
          {message}
          <Button
            text={this.state.showResult ? 'Play Again' : 'Spin'}
            handleClick={this.state.showResult ? this.handlePlayAgain : this.handleSpin}
            disabled={_.last(this.state.spinning)}
          />
        </section>
      </section>
    );
  }

  handleSpin = () => {
    let result = this.getResult();
    this.setState({
      spinning: _.fill(Array(this.props.numSlots), true),
      spinResult: result
    });

    for (let i = 0; i < this.props.numSlots; i++){
      setTimeout(()=>{
        this.setState((prevState)=>{
          let arr = prevState.spinning;
          arr[i]=false;
          return {spinning: arr};
        });
      }, 2000+(i*2000));
    }
    setTimeout(()=>{
      this.setState({ showResult: true  });
    }, (2000*this.props.numSlots + 50));
  }

  getResult = () => {
    let result = Array(this.props.numSlots);
    for (let i = 0; i < this.props.numSlots; i++) {
      result[i]=this.getRandomSlotResult(0, _.head(this.props.slotOptions).length);
    }
    return result;
  }

  getRandomSlotResult = (min, max) => {
    return Math.floor(Math.random() * max);
  }

  handlePlayAgain = () => {
    this.setState({ showResult: false });
  }

}

SlotMachine.propTypes = {
  numSlots: React.PropTypes.number,
  slotOptions: React.PropTypes.array,
}


export default SlotMachine;
