import React, { Component } from 'react';
import classNames from 'classnames';
import _ from 'lodash';
import loader from '../images/loader.gif';
import {Tweet} from 'react-twitter-widgets';
import Chart from './lib/Chart.js';
import DropdownComponent from './lib/DropdownComponent.js';

import './Component.css';

class Component1 extends Component {
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

        <section className='component_section'>
					<div className='component_box'>
						<div className='monster'/>
						<p className='subtext'>Animated Component</p>
					</div>
          <div className='component_box info'>
            <b>
              The best part of React is thinking in React.
            </b>
            <p>
              An organized way to build a single page application is to break the user interface
              into a hierarchy of independent and customizable parts.
              React accomplishes this through its use of components.
            </p>
            <p>
              Once a component is built, it can be used anywhere in an app.
              It's very satisfying to build a component that will be used repeatedly
              and to easily add capabilities or features at any time.
            </p>
          </div>
        </section>

				<section className='component_section'>
					<div className='component_box info'>
						<b>
							Extend functionality in a controlled way through components.
						</b>
						<p>
							Sometimes, a lot of functionality is demanded of a component. While components
							should always be refactored into multiple components before growing too large,
							some cases require a smart component that can handle options
							and data processing steps.
						</p>
						<p>
							For example, I have extended the functionality of a component that
							rendered Chart.js canvas charts.
							This component grew in complexity with helper functions processing analytics data
							depending on options passed to the component.
						</p>
						<div className='codeblock space-top-sm'>
							 <code>
								{`<Chart
										type='line'
										title='New Users'
										query='new_users'/>`}
							</code>
						</div>
					</div>
					<div className='component_box full-width-mobile'>
						<Chart />
					</div>
				</section>

        <section className='component_section section_wrap_reverse'>
          <div className='component_box'>
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
            <p className='subtext'>Dropdown Component</p>
          </div>
          <div className='component_box info'>
            <b>
              Build components to be used repeatedly.
            </b>
            <p>
              React components are designed to be reusable. I maintain a strict practice of
              making components completely
              self-containing in their functionality, while making sure they are
              reusable through expected input.
            </p>
            <p>
              An example of this is a custom dropdown selector I built. It is dynamic in its options,
              since it expects an array of key value pairs as props.
              Beyond that, it maintains its styles and its functionality of showing open and closed views
              of the options. Upon the user selecting an option, the click handler supplied
              to the component is triggered.
            </p>
          </div>
        </section>

				<section className='component_section'>
					<div className='component_box info space-top'>
						<b>
							See results update instantly.
						</b>
						<p>
							React elements are cheap to create and can be used to render items
							on a webpage such as
							a list of results. In a filtering scenario where a user is narrowing
							down their view of flight arrivals and departures based on multiple criteria,
							logic is used to construct a new list of results and statistics
							to display.
						</p>
						<p>
							The React DOM then handles updating the DOM to match the constructed React elements.
							This gives the user an experience of seeing an instantly updated list of
							flight results and statistics with each filter they add or remove.
							React makes this easy for the developer, allowing focus on the
							actual filter logic instead of updating the DOM.
						</p>
					</div>
					<div className='component_box full-width-mobile'>
						<img
							className='image'
							src={require('../images/depArr.png')}
							role='presentation'
						/>
            <p className='subtext'>Departures and Arrivals App</p>
					</div>
				</section>

        <section className='component_section'>
					<div className='component_box info'>
						<b>
							Redux organizes app state.
						</b>
						<p>
							Redux stores the state of an application as an object tree, defining a single source of truth for that app.
							This store can be referenced by React components as read-only props.
							Actions can update the store by dispatching calls to pure functions that post updates to the store.
						</p>
						<p>
							Actions can be evoked when a component loads or can be called after a specific user interaction.
							Testing an application with a Redux store is accomplished by writing tests for the actions and reducers of the app.
						</p>
					</div>
					<div className='component_box codebox'>
						<div className='codeblock'>
							<code>
								this.props.actions.login();
							</code>
							 <code>
								dispatch('LOGIN');
							</code>
							<code>
								test.it('actions: log in', this.props.actions.login());
							</code>
							 <code>
								test.it('reducers: log in', dispatch('LOGIN'));
							</code>
						</div>
					</div>
        </section>

				<section className='component_section section_wrap_reverse'>
					<div className='component_box'>
						<img
							src={loader}
							className={loaderClass}
							role='presentation'
						/>
						<Tweet
							tweetId='796537445428830208'
							className='center-horizontally'
							options={{
								width: '100%',
							}}
							onLoad={this.removeLoader}
						/>
					</div>
					<div className='component_box info space-top'>
						<b>
							Sharing the good news.
						</b>
						<p>
							I lead monthly React.js
		          <a
		            href='https://github.com/shae-wat/react-workshops'
		            target='_blank'
		            className='space-around'
		          >
		          workshops
		          </a>
		          for Women Who Code Portland.
							I run hands-on React.js workshops for our members and have grown the interest
							and aptitude of our community for Javascript and React.
						</p>
						<p>
							Workshop projects include demonstrating the use of Chart.js as a React component
							and making React components animated with CSS.
						</p>
					</div>
				</section>


        <section className='component_section_box'>
          <p>
            As a front end engineer, I have worked on teams building React/Redux applications since July 2015.
          </p>
          <p>
            I have contributed to consumer and admin-facing applications at
            <a
              href='https://beta.flightstats.com/flight-tracker/search'
              target='_blank'
              className='space-around'
            >
              FlightStats, Inc.
            </a>
            and
            <a
              href='https://www.getcivil.com/'
              target='_blank'
              className='space-around'
            >
              Civil Co.
            </a>
          </p>
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

export default Component1;
