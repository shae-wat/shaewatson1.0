import React, { Component } from 'react';
import classNames from 'classnames';
import loader from '../../images/loader.gif';
import {Tweet} from 'react-twitter-widgets';
import Chart from '../lib/Chart';

import '../Component.css';

class TechBabbleIndex extends Component {
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

        <section className='component_section'>
					<div className='component_box'>
						<div className='monster'/>
						<p className='subtext'>Animated Component</p>
					</div>
          <div className='component_box info'>
            <b>
              Keep it simple, do it right
            </b>
            <p>
              This animated component looks simple in its JSX form.
            </p>
						<div className='codeblock'>
							 <code>
								{`<div className='monster'/>`}
							</code>
						</div>
            <p>
              The animation is achieved with only CSS, keeping the Javascript
							code around it readable and reusable. Animations should be built
							before adding them to a website, allowing the web app to use its
							resources for business and functionality value.
            </p>
          </div>
        </section>

        <section className='component_section'>
					<div className='component_box info'>
						<b>
							Extend functionality in a controlled way.
						</b>
						<p>
							Sometimes, a lot of functionality is demanded of a component. While components
							should always be refactored into multiple components before growing too large,
							some cases require a smart component that can handle options
							and data processing steps.
						</p>
						<p>
              In these cases it is best to break out the Javascript processing
              into helper functions that can be reused in other smart components.
							For example, consider the functionality of a component that
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
					<div className='component_box full-width-mobile'>
						<img
							className='image'
							src={require('../../images/flight_ticket.png')}
							role='presentation'
						/>
						<p className='subtext'>FlightStats Ticket with Flight Information</p>
					</div>
					<div className='component_box info space-top-sm'>
						<b>
							Good design is recognizable and intuitive.
						</b>
						<p>
							User interfaces simply need to make sense. Like a joke, if you have to explain it,
							it is probably not that good.
						</p>
						<p>
							One way to accomplish this is to follow in the footsteps of existing designs.
							At FlightStats, I made the flight ticket component which was designed in the
							fashion of actual flight tickets.
						</p>
						<p>
							When lots of text is presented to the user, different colors and opacities
							can give the design the impression of being simpler than it really is.
						</p>
					</div>
				</section>

				<section className='component_section'>
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
							Stand up for a better world. Make your jobs green and
							keep your site up on servers running on renewable energy!
						</p>
					</div>
					<div className='component_box'>
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

export default TechBabbleIndex;
