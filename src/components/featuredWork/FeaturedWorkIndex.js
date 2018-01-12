import React, { Component } from 'react'
import classNames from 'classnames'
import _ from 'lodash'
import loader from '../../images/loader.gif'
import DropdownComponent from '../lib/DropdownComponent.js'
import Gist from '../lib/EmbeddedGist.js'

import '../Component.css'

class Component3 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      selectedDropdownIndex: 0,
      selectedOptionHoverColor: '#FFB6C1',
    }
  }

  render() {
    if (this.props.activeTab !== 2) return null

    let loaderClass = classNames({
      ['show']: this.state.loading,
      ['hide']: !this.state.loading,
    })

    const dropdownOptions = [
      { value: 'farm', label: 'Farm to Table' },
      { value: 'pressed', label: 'Cold Pressed' },
      { value: 'local', label: 'Local' },
      { value: 'bicycle', label: 'Bicycle' },
      { value: 'organic', label: 'Organic' },
    ]

    const dropdownColorOptions = [
      '#babfff',
      '#1414cc',
      '#e5c1bf',
      '#ffb6c1',
      '#fa225b',
    ]

    let selected = _.get(
      dropdownOptions[this.state.selectedDropdownIndex],
      'label',
    )

    const selectOptionHoverColor = selectedColor => {
      this.setState({ selectedOptionHoverColor: selectedColor })
    }

    return (
      <div className="component_content">
        <section className="component_section section_wrap_reverse">
          <div className="component_box info space-top-sm space-bottom-sm">
            <b>Power Pricing Page</b>
            <p>
              The Power Pricing Page is a product I delivered at Clara Lending. It is an
              admin page designed to be used by loan officers in the context of
              a loan application. The loan officer enters all the necessary
              inputs then can work with the borrower to select a loan product.
            </p>
            <p>
              This page is important because it allowed the intial connection of the Clara Lending Borrower Portal to a new pricing engine, LenderPrice, while also
              allowing the factoring in of Clara-specific variables such as different pricing results
              for Clara Lending promotions and limiting selectable options to supported
              mortgage configurations.
            </p>
          </div>
          <div className="component_box full-width-mobile">
            <img
              className="image"
              src={require('../../images/power-pricer.png')}
              role="presentation"
            />
            <p className="subtext">Power Pricer Page (January 2018)</p>
          </div>
        </section>

        <section className="component_section">
          <div className="component_box full-width-mobile--ALMOST space-top space-bottom">
            <img
              className="image"
              src={require('../../images/adn_dropdown_closed.png')}
              role="presentation"
            />
            <p className="subtext">
              Dropdown Component on Anchorage Daily News (December 2017)
            </p>
          </div>
          <div className="component_box info space-top-sm space-bottom-sm">
            <b>Custom Dropdown Menu React Component</b>
            <p className="image-padding-bottom">
              I contibuted to a third party Javascript commenting app that could
              could be customized to match its hosting webpage, which are mostly newspapers. Because of this,
              it was a nice touch to build a dropdown menu that inherited the
              colors of the site.
            </p>
            <h4>
              Here is the
              <span
                style={{
                  color: this.state.selectedOptionHoverColor,
                  marginLeft: '6px',
                  marginRight: '6px',
                }}
              >
                {'color-customizable'}
              </span>
              dropdown menu in action!
            </h4>
            <div className="color-selector">
              <p>Select color:</p>
              <span className="color-selector--PALLETTE">
                {dropdownColorOptions.map(color => (
                  <div
                    key={color}
                    className="color-selector-box"
                    style={{ backgroundColor: color }}
                    onClick={() => selectOptionHoverColor(color)}
                  />
                ))}
              </span>
            </div>
            <div className="dropdown-component">
              <DropdownComponent
                options={dropdownOptions}
                handleSelect={index => {
                  this.setState({ selectedDropdownIndex: index })
                }}
                selectedOption={this.state.selectedDropdownIndex}
                optionHoverColor={this.state.selectedOptionHoverColor}
              />
            </div>
          </div>
        </section>

        <section className="component_section">
          <div className="component_box info space-top">
            <b>Interdependent Form Input Fields</b>
            <p>
              The Power Pricing Page was non-trivial to build since the
              specifications included interdependent, auto-updating fields.
              Existing components in the Clara borrower portal app came in super
              handy, such as the <code>InputCurrencyField</code> input field
              which disallows the user from entering non-numeric characters into
              the input field.
            </p>
            <p>
              The best part about the interdependent fields in Clara Lending's
              Power Pricer is the code propagating the changes of one field to
              other fields. As clearly defined functions with clearly defined
              fields to be affected, these updater functions are extended easily
              when new cases or constraints emerge.
            </p>
            <img
              className="giphy space-top-sm"
              src={require('../../images/pricer-interdependent-fields.gif')}
              role="presentation"
            />
            <p className="subtext">
              Power Pricer Interdependent Pricing Fields (January 2018)
            </p>
          </div>
          <div className="component_box full-width-mobile">
            <div className="component_gist_box_lg">
              <Gist gist="shae-wat/b943dd0ada21ebd8a916cca672c394fc" />
              <p className="subtext">
                Sample Code of Interdependent redux-form Fields
              </p>
            </div>
          </div>
        </section>

        <section className="component_section">
          <div className="component_box full-width-mobile">
            <img
              className="image"
              src={require('../../images/depArr.png')}
              role="presentation"
            />
            <p className="subtext">
              FlightStats Departures and Arrivals App (2016)
            </p>
          </div>
          <div className="component_box info space-top">
            <b>Airport Departures and Arrivals Page</b>
            <p>
              React elements are cheap to create and can be used to render items
              expected to re-render on a webpage such as a list of results. On
              the FlightStats Departures and Arrivals page, the rows of the
              results table are all React components that render with basic
              styling depending on information about the flight status.
            </p>
            <p>
              On the departures and arrivals page, several filters can be
              applied to see a list of relevant departing and arriving flights.
              The experience of seeing an instantly updated results list of
              flight statuses and airport statistics based on filters prevents
              information overload for users. Not waiting for a reload builds
              user confidence, and is possible by triggering a simple and cheap
              re-render of the results when a filter is applied.
            </p>
          </div>
        </section>

        <section className="component_section section_wrap_reverse">
          <div className="component_box info space-top">
            <b>Orox Leather Branded Website</b>
            <p>
              As a front end engineer, it is my job to bring a given design to
              life on a webpage. It is up to me to write the code in a way that
              is simple to extend and change while keeping a consistent
              experience of the visual design. The solidity of a front end
              implementation becomes apparent as the site is used on different
              machines and over time as content changes.
            </p>
            <p>
              In my early career, I especially enjoyed styling the
              <a
                href="https://www.oroxleather.com/"
                target="_blank"
                className="space-around"
              >
                Orox Leather
              </a>
              website. Orox sells unique, fine leather products and needed a
              website to reflect their unique and special style. I made changes
              to the existing Shopify theme to match their requested design
              updates, making sure my updates would last a long time by writing
              clean, consistent, and intelligently designed CSS.
            </p>
          </div>
          <div className="component_box full-width-mobile">
            <img
              className="image"
              src={require('../../images/orox-homepage.png')}
              role="presentation"
            />
            <p className="subtext">
              Browser viewport screenshot of Orox Leather Homepage (October
              2017)
            </p>
          </div>
        </section>

        <section className="component_section">
          <div className="component_box full-width-mobile">
            <img
              className="image"
              src={require('../../images/Cerevisiae_heatShock.png')}
              role="presentation"
            />
            <p className="subtext">
              Generalized Visualization of Changes in Yeast Gene Expression to
              Heat Shock (2011)
            </p>
          </div>
          <div className="component_box info space-top-sm">
            <b>Visualization of Changes in Gene Expression</b>
            <p>
              I got into design and visualization during college while working
              in the
              <a
                href="http://fg.cns.utexas.edu/fg/home.html"
                target="_blank"
                className="space-around"
              >
                University of Texas at Austin’s Functional Genomics Research
                Stream.
              </a>
            </p>
            <p>
              After micropipetting for a few months, I was drawn to visualizing
              the data of the lab in order to parse meaning from the gigabytes
              of numbers produced by next generation sequencing technology.
            </p>
            <p>
              The software I wrote drew presentable images of computational
              results, removing noise and allowing researchers to see the
              results of their work in an intuitive way where patterns could be
              recognized.
            </p>
          </div>
        </section>
      </div>
    )
  }

  removeLoader = () => {
    this.setState({
      loading: false,
    })
  }
}

export default Component3
