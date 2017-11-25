import React, { Component } from 'react';
import classNames from 'classnames';
import _ from 'lodash';
import SlotMachine from './slot-machine/SlotMachine.js';
import loader from '../../images/loader.gif';
import DropdownComponent from '../lib/DropdownComponent.js';

import threeSlots from '../../slots-three.json';
import '../Component.css';

class Component3 extends Component {
	constructor(props) {
    super(props);

		this.state = {
			loading: true,
			selectedDropdownIndex: 0,
		}
  }

  render() {
    if (this.props.activeTab !== '1') return null;

		let loaderClass = classNames({
			['show']: this.state.loading,
			['hide']: !this.state.loading,
		});

		const dropdownOptions = [
			{value: 'farm', label: 'Farm to Table'},
			{value: 'pressed', label: 'Cold Pressed'},
			{value: 'local', label: 'Local'},
			{value: 'bicycle', label: 'Bicycle'},
			{value: 'organic', label: 'Organic'},
		];
		let selected = _.get(dropdownOptions[this.state.selectedDropdownIndex], 'label');
		let dropdownMessage = (<h3>You have selected: {selected}</h3>);


    return (
      <div className='component_content'>

				<section className='component_section section_wrap_reverse'>
					<div className='component_box info space-top'>
						<b>
							Orox Leather Branded Website
						</b>
						<p>
							As a front end engineer, it is my job to bring a given design
							to life on a webpage.
							It is up to me to write the code in a way that is
							simple to extend and change while keeping a consistent
							experience of the visual design. The solidity of a front end
							implementation becomes apparent as the site is used on different machines
							and over time as content changes.
						</p>
						<p>
							In my early career, I especially enjoyed styling the
							<a
								href='https://www.oroxleather.com/'
								target='_blank'
								className='space-around'
							>
								Orox Leather
							</a>
							website.
							Orox sells unique, fine leather products and needed a website
							to reflect their unique and special style. I made changes to the
							existing Shopify theme to match their requested design updates,
							making sure my updates would last a long time by writing
							clean, consistent, and intelligently designed CSS.
						</p>
					</div>
					<div className='component_box full-width-mobile'>
						<img
							className='image'
							src={require('../../images/orox-homepage.png')}
							role='presentation'
						/>
						<p className='subtext'>Browser viewport screenshot of Orox Leather Homepage (October 2017)</p>
					</div>
				</section>

				<section className='component_section'>
					<div className='component_box'>
						<img
							className='image image-dropdown'
							src={require('../../images/react_dropdown_adn.png')}
							role='presentation'
						/>
						<p className='subtext'>Dropdown Component</p>
					</div>
					<div className='component_box info'>
						<b>
							Custom Dropdown Menu
						</b>
						<p>
							I contibuted to a third party Javascript app that was customizable
							to match its hosting webpage. Because of this, it was a nice touch
							that the app's dropdown menu
							could also inherit the host's site colors to maintain the theme.
						</p>
						<div className='dropdown-component'>
							<DropdownComponent
								options={dropdownOptions}
								handleSelect={(index)=>{
									this.setState({ selectedDropdownIndex: index })
								}}
								selectedOption={this.state.selectedDropdownIndex}
							/>
						</div>
						{dropdownMessage}
					</div>
				</section>

				<section className='component_section section_wrap_reverse'>
					<div className='component_box info space-top'>
						<b>
							Different views for different device experiences
						</b>
						<p>
							It is an expectation in my work to handle page
							layout across all viewport sizes.
							In some cases, the design calls for elements of the webpage to be displayed
							differently based on the viewport.
							For example, when implementing a modal for users to "rate a comment",
							the user interface needed to behave very different between mobile
							and desktop views.
						</p>
						<p>
							The mobile user is given an option to click <code>READ MORE</code> to
							show more text content beneath the article title and username, and by
							default is only shown the headlines.
						</p>
						<p>
							The desktop view, in contrast, shows a snippet of the text content
							beneath the titles by default, and the <code>READ MORE</code> button
							is conditionally shown when then text content exceeds a maximum snippet amouunt.
						</p>
					</div>
					<div className='component_box full-width-mobile'>
						<img
							className='image'
							src={require('../../images/ui_mobile.png')}
							role='presentation'
						/>
						<p className='subtext'>Mobile View with all text content hidden behind a button</p>
						<img
							className='image'
							src={require('../../images/ui_desktop.png')}
							role='presentation'
						/>
						<p className='subtext'>Desktop View with text content shown beneath title/username</p>
					</div>
				</section>


				<section className='component_section'>
					<div className='component_box full-width-mobile'>
						<img
							className='image'
							src={require('../../images/depArr.png')}
							role='presentation'
						/>
						<p className='subtext'>Departures and Arrivals App (2016)</p>
					</div>
					<div className='component_box info space-top'>
						<b>
							Airport Departures and Arrivals Page
						</b>
						<p>
							React elements are cheap to create and can be used to render items
							expected to re-render on a webpage such as
							a list of results. On the FlightStats Departures and Arrivals page,
							the rows of the results table are all React components that render
							with basic styling depending on information about the flight status.
						</p>
						<p>
							On the departures and arrivals page,
							several filters can be applied to see a list of relevant departing
							and arriving flights.
							The experience of seeing an instantly updated results list of
							flight statuses and airport statistics based on filters
							prevents information overload for users. Not waiting for a
							reload builds user confidence, and is possible by triggering a
							simple and cheap re-render of the results when a filter is applied.
						</p>
					</div>
				</section>

				<section className='component_section_box info'>
					<b>
						Slot Machine Game
					</b>
					<p>
						Web content should be playful and delightful!
						This is achieved by simple design and clever animations when handling time.
					</p>
					<p>
						This Slot Machine component that I made exemplifies the use of CSS
						animation and design to achieve a game experience.
						Click SPIN to start!
					</p>
					<SlotMachine
						numSlots={threeSlots.numSlots}
						slotOptions={threeSlots.slotOptions}
					/>
				</section>

				<section className='component_section'>
					<div className='component_box full-width-mobile'>
						<img
							className='image'
							src={require('../../images/Cerevisiae_heatShock.png')}
							role='presentation'
						/>
						<p className='subtext'>Generalized Visualization of Changes in Yeast Gene Expression to Heat Shock (2011)</p>
					</div>
					<div className='component_box info space-top-sm'>
						<b>
							Visualization of Changes in Gene Expression
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
				</section>

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
