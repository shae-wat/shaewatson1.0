import React, { Component } from 'react'

import '../Component.css'

class Component2 extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.activeTab !== 1) return null

    return (
      <div className="component_content">
        <section className="component_section section_wrap_reverse">
          <div className="component_box info image-padding-bottom space-top space-bottom-sm">
            <div className="image-padding-bottom">
              <b>Updating the mortgage industry</b>
              <p>
                The mortgage process is arduous and has not moved into the new
                online space created by modern technology. Behind the scenes,
                processing a loan application is a difficult task to break down
                and manage amongst a group of loan officers.
              </p>
              <p>
                At Clara I am delivering a UI that makes it easier for people
                people seeking mortgages to understange the mortgage application
                process while directly interfacing with an internal, task-based
                mortgage underwriting process.
              </p>
            </div>
            <div className="dark-background">
              <img
                className="image"
                src={require('../../images/clara-logo.svg')}
                role="presentation"
              />
            </div>
          </div>
          <div className="component_box">
            <img
              className="image image-dropdown"
              src={require('../../images/clara_bopo.png')}
              role="presentation"
            />
            <p className="subtext">
              Clara Borrower Portal's Best Match Loan UI that I built
            </p>
          </div>
        </section>

        <section className="component_section">
          <div className="component_box">
            <div className="codeblock">
              <code className="codebox__line">
                {`yarn run build:wordpress-affordability-calculator`}
              </code>
              <code className="codebox__line">
                {`<script src="https://s3.com/calculator.js"></script>`}
              </code>
            </div>
          </div>
          <div className="component_box info">
            <b>Plug it in plug it in</b>
            <p>
              A skill I keep reusing in my work at small, scrappy companies, is
              compiling React components into Javascript that can be plugged
              into marketing websites. At Clara, I used this skill again when I
              was tasked with featuring an existing React mortgage calculator on
              a
              <a
                href="https://clara.com/mortgage-calculators-home-affordability-calculator/"
                target="_blank"
                className="space-around"
              >
                marketing page
              </a>
              .
            </p>
            <p>
              Putting this calculator on the Wordpress site required a webpack
              compilation configuration that enabled the React component to be
              built to a Javascript file, which I then hosted on s3. Referencing
              the hosted, publically viewable file in a script tag made it
              simple to plug in the calculator to the marketing site page.
              Hosting the file in this way also allows an engineer to update the
              component by rebuilding and pushing the new build to s3 without
              having to touch the Wordpress site.
            </p>
          </div>
        </section>

        <section className="component_section section_wrap_reverse">
          <div className="component_box info">
            <b>How to dive into learning Ruby</b>
            <p>
              It just so happens that right when I was beginning to learn Ruby
              in order to provide support for the Clara Ruby on Rails
              infrastructure, Matz visited the Clara office. Apparently, he was
              on a tour of businesses around the Bay Area and Silicon Valley and
              Clara's co-founder Lukasz was connected enough to invite him to a
              meeting at the Clara office to discuss how Clara relies on Ruby.
            </p>
            <p>
              The best advice given by Matz was that the way to learn Ruby is to
              start using it to build something.
            </p>
          </div>
          <div className="component_box full-width-mobile">
            <img
              className="image"
              src={require('../../images/Matz.jpg')}
              role="presentation"
            />
            <p className="subtext">
              Clara Engineering meeting Matz (October 2017)
            </p>
          </div>
        </section>
      </div>
    )
  }
}

export default Component2
