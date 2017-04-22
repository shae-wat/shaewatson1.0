import React, { Component } from 'react';
import classNames from 'classnames';
import SlotMachine from './SlotMachine.js';
import loader from '../images/loader.gif';
import {Tweet} from 'react-twitter-widgets';

import threeSlots from '../slots-three.json';
import './Component.css';

class Component3 extends Component {
	constructor(props) {
    super(props);

		this.state = {
			loading: true,
		}
  }

  render() {
    if (this.props.activeTab !== '3') return null;

		let loaderClass = classNames({
			['show']: this.state.loading,
			['hide']: !this.state.loading,
		});

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

				<div className='component_section section_wrap_reverse'>
					<div className='component_box'>
						<img
							className='image'
							src={require('../images/Cerevisiae_heatShock.png')}
							role='presentation'
						/>
						<p className='subtext'>Generalized Visualization of Changes in Yeast Gene Expression to Heat Shock</p>
					</div>
					<div className='component_box info space-top-sm'>
						<b>
							Implementing a front end is about sitting between data
							and the business needs of a product.
						</b>
						<p>
							I got into design and visualization during college while working in the
							<a
								href='http://fg.cns.utexas.edu/fg/home.html'
								target='_blank'
								className='space-around'
							>
								University of Texas at Austin’s Functional Genomics Research Stream.
							</a>
						</p>
						<p>
							After micropipetting for a few months, I was drawn to visualizing the
							data of the lab in order to parse meaning from the gigabytes of
							numbers produced by next generation sequencing technology.
						</p>
						<p>
							The software I wrote drew presentable images of computational results,
							removing noise and allowing researchers to see the results of
							their work in an intuitive way where patterns could be recognized.
						</p>
					</div>
				</div>

				<div className='component_section'>
					<div className='component_box info space-top'>
						<b>
							A brand emerges from consistant and polished styling.
						</b>
						<p>
							As a front end engineer, I am usually given a design to implement.
							It is then up to me to design the code in a way that it is
							easy to keep a consistant experience of the design as
							the site grows and changes. The solidity of the front end
							implementation becomes apparent when
							viewing the site on different machines and browsers.
						</p>
						<p>
							Orox Leather is a family-owned leather shop in Portland, Oregon.
							They sell unique, fine leather products and needed their Shopify
							theme to reflect that. When implementing the requested design,
							I made sure it would last a long time by ensuring the CSS worked
							across all viewports seamlessly.
						</p>
					</div>
					<div className='component_box'>
						<img
							className='image'
							src={require('../images/orox-homepage.png')}
							role='presentation'
						/>
						<p className='subtext'>Orox Leather Homepage</p>
					</div>
				</div>

				<div className='component_section'>
					<div className='component_box center-horizontally'>
						<img
							src={loader}
							className={loaderClass}
							role='presentation'
						/>
						<Tweet
							tweetId='855888597035044864'
							className='center-horizontally'
							options={{
								width: '100%',
							}}
							onLoad={this.removeLoader}
						/>
					</div>
					<div className='component_box info space-top'>
						<b>
							Do something good with your space on the web.
						</b>
						<p>
							Protect your users. Believe in your users. Build something
							on the web that will make the world a better, more enabled,
							and more informed place.
						</p>
						<p>
							Stand up for a better world. And while you are at it,
							keep your site up using servers running on renewable energy.
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

	removeLoader = () => {
		this.setState({
			loading: false,
		});
	}

}

export default Component3;
