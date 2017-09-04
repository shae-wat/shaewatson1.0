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


      </div>
    );
  }

}

export default Component2;
