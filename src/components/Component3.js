import React, { Component } from 'react';
import classNames from 'classnames';
import SlotMachine from './SlotMachine.js';

import threeSlots from '../slots-three.json';
import './Component.css';

class Component3 extends Component {
	constructor(props) {
    super(props);
  }

  render() {
    if (this.props.activeTab !== '3') return null;

    return (
      <div className='component_content'>

        <div className='component_section'>
          <div className='component_box info space-top'>
            <b>
              Everything should look good on everything.
            </b>
            <p>
              It has always been an expectation in my work to handle page layout across all viewport sizes.
            </p>
            <p>
              In some cases, the design calls for information to be displayed differently based on the viewport.
              In the associated examples, I made a user interface that does just that.
            </p>
            <p>
              The mobile user is given an option to click <code>READ MORE</code> to show more text content
              beneath the article title and username.
              The desktop view, in contrast, shows the text content beneath the titles by default.
            </p>
          </div>
          <div className='component_box'>
            <img
							className='image'
							src={require('../images/ui_desktop.png')}
							role='presentation'
						/>
            <p className='subtext'>Desktop View</p>
            <img
							className='image'
							src={require('../images/ui_mobile.png')}
							role='presentation'
						/>
            <p className='subtext'>Mobile View</p>
          </div>
        </div>

				<div className='component_section'>
					<div className='component_box'>
						<img
							className='image'
							src={require('../images/Cerevisiae_heatShock.png')}
							role='presentation'
						/>
						<p className='subtext'>Generalized Visualization of Stress Response of Yeast to Heat Shock</p>
					</div>
					<div className='component_box info space-top'>
						<b>
							Implementing a front end is about sitting between backend data
							and the business needs of a product.
						</b>
						<p>
							I got into design and visualization in college while working in the
							University of Texas at Austin’s Functional Genomics Research Stream.
						</p>
						<p>
							After micropipetting for a few months, I was drawn to visualizing the
							data of the lab in order to parse meaning from the gigabytes of
							numbers produced by next generation sequencing technology.
						</p>
					</div>
				</div>

				<div className='component_section_box info'>
					<b>
						Web content should be playful and delightful.
					</b>
					<p>
						This is achieved by simple design and clever animations when handling time.
					</p>
					<p>
						This Slot Machine component that I made exemplifies this.
						Click SPIN to start!
					</p>
					<SlotMachine
						numSlots={threeSlots.numSlots}
						slotOptions={threeSlots.slotOptions}
					/>
				</div>

      </div>
    );
  }

}

export default Component3;
