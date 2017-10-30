import React, { Component } from 'react';
import classNames from 'classnames';

import '../Component.css';

class Component2 extends Component {
	constructor(props) {
    super(props);
  }

  render() {
    if (this.props.activeTab !== '2') return null;

    return (
      <div className='component_content'>

        <section className='component_section'>
          <div className='component_box info'>
            <b>
              Updating the mortgage industry
            </b>
            <p>
              Mortgages are hard. Technology is hard.
            </p>
            <p>
							At Clara I am delivering a UI that makes it easier for
              people seeking mortgages to understange the mortgage application
              process while directly interfacing with an internal, task-based
              mortgage underwriting process.
            </p>
          </div>
          <div className='component_box dark-background'>
						<img
							className='image'
							src={require('../../images/clara-logo.svg')}
							role='presentation'
						/>
					</div>
        </section>

				<section className='component_section'>
					<div className='codeblock'>
						 <code>
							{`yarn run build:wordpress-affordability-calculator`}
						</code>
						 <code>
							{`<script src="https://s3.amazonaws.com/static.com/affordability-calculator.js"></script>`}
						</code>
					</div>
					<div className='component_box info'>
						<b>
							Plug it in plug it in
						</b>
						<p>
							A skill I keep reusing in my work at small, scrappy companies,
							is compiling React components into javascript that can be
							plugged in pages on marketing websites. At Clara, I used this skill
							again when I was tasked with featuring an existing React mortgage
							calculator on a
							<a
								href='https://clara.com/mortgage-calculators-home-affordability-calculator/'
								target='_blank'
								className='space-around'
							>
								marketing page.
							</a>
							.
						</p>
						<p>
							Putting this calculator on the Wordpress site required a webpack
							compilation configuration that enabled the React component to be
							built to a javascript file, which I then hosted on s3.
							Referencing the hosted, publically viewable file in a script tag made it
							simple to plug in the calculator to the marketing site page.
							Hosting the file in this way also allows an engineer to update the
							component by rebuilding and pushing the new javascript to s3
							without having to touch the Wordpress site.
						</p>
					</div>
				</section>


      </div>
    );
  }

}

export default Component2;
