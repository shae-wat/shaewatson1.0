import React, { Component } from 'react'
import classNames from 'classnames'
import loader from '../../images/loader.gif'
import { Tweet } from 'react-twitter-widgets'
import Chart from '../lib/Chart'
import SlotMachine from '../lib/slot-machine/SlotMachine.js'
import threeSlots from '../../slots-three.json'

import '../Component.css'

class TechBabbleIndex extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
    }
  }

  render() {
    if (this.props.activeTab !== 3) return null

    let loaderClass = classNames({
      ['show']: this.state.loading,
      ['hide']: !this.state.loading,
    })

    return (
      <div className="component_content">
        <section className="component_section">
          <div className="component_box">
            <div className="monster" />
            <p className="subtext">Animated Component</p>
          </div>
          <div className="component_box info">
            <b>Keep it simple, do it right</b>
            <p>This animated component looks simple in its JSX form.</p>
            <div className="codeblock">
              <code>{`<div className='monster'/>`}</code>
            </div>
            <p>
              The animation is achieved with only CSS, keeping the Javascript
              code around it readable and reusable. Animations should be built
              before adding them to a website, allowing the web app to use its
              resources for business and functionality value.
            </p>
          </div>
        </section>

        <section className="component_section section_wrap_reverse">
          <div className="component_box info">
            <b>Extend functionality in a controlled way</b>
            <p>
              Sometimes, a lot of functionality is demanded of a component.
              While components should always be refactored into multiple
              components before growing too large, some cases require a smart
              component that can handle options and data processing steps.
            </p>
            <p>
              In these cases it is best to break out the Javascript processing
              into helper functions that can be reused in other smart
              components. For example, consider the functionality of a component
              that rendered Chart.js canvas charts. This component grew in
              complexity with helper functions processing analytics data
              depending on options passed to the component.
            </p>
            <div className="codeblock space-top-sm">
              <code>
                {`<Chart
										type='line'
										title='New Users'
										query='new_users'/>`}
              </code>
            </div>
          </div>
          <div className="component_box full-width-mobile">
            <Chart />
          </div>
        </section>

        <section className="component_section">
          <div className="component_box full-width-mobile">
            <img
              className="image"
              src={require('../../images/flight_ticket.png')}
              role="presentation"
            />
            <p className="subtext">
              FlightStats Ticket with Flight Information
            </p>
          </div>
          <div className="component_box info space-top-sm">
            <b>Good design is recognizable and intuitive</b>
            <p>
              User interfaces simply need to make sense. Like a joke, if you
              have to explain it, it is probably not that good.
            </p>
            <p>
              One way to accomplish this is to follow in the footsteps of
              existing designs. At FlightStats, I made the flight ticket
              component which was designed in the fashion of actual flight
              tickets.
            </p>
            <p>
              When lots of text is presented to the user, different colors and
              opacities can give the design the impression of being simpler than
              it really is.
            </p>
          </div>
        </section>

        <section className="component_section section_wrap_reverse">
          <div className="component_box info space-top-sm">
            <b>Sharing constants with the designer</b>
            <p>
              When I first joined Clara Lending's consumer product team, I was
              introduced to a new concept: variables and functions driving the
              implementation of spacing in the CSS of the front end.
            </p>
            <p>
              Vertical margins and padding are based on the established vertical
              rhythm pattern, where everything is a multiple of 4px and based on
              a <code>rhythm()</code> function where{' '}
              <code>rhythm() = 24px</code>. Horizontal margins and padding are
              based on on gutter and column definitions, which our designer
              defined for us as <code>$grid-column-width: = 96px</code> and{' '}
              <code>$grid-gutter-width: = 16px</code>.
            </p>
            <p>
              Though I was skeptical at first, I soon found myself breezing
              through implementing new designs with these horizontal and
              vertical definitions. Though my meme mocks the complexity when an
              element has <code>16px</code> padding on all sides, the meme also
              demonstrates conscious decisions were made when assigning that
              padding to an element. Sharing CSS constants with the designer
              drastically improved my developer experience and speed.
            </p>
          </div>
          <div className="component_box full-width-mobile">
            <img
              className="image"
              src={require('../../images/drake_padding.png')}
              role="presentation"
            />
            <p className="subtext">
              Joke meme I made to poke fun at our way of writing Sassy CSS at
              Clara Lending
            </p>
          </div>
        </section>

        <section className="component_section">
          <div className="component_box full-width-mobile">
            <img
              className="image"
              src={require('../../images/ui_mobile.png')}
              role="presentation"
            />
            <p className="subtext">
              Civil Comments mobile view with all text content hidden behind a
              button (2017)
            </p>
            <img
              className="image"
              src={require('../../images/ui_desktop.png')}
              role="presentation"
            />
            <p className="subtext">
              Civil Comments desktop view with text content shown beneath
              title/username (2017)
            </p>
          </div>
          <div className="component_box info space-top">
            <b>Different views for different device experiences</b>
            <p>
              It is an expectation in my work to handle page layout across all
              viewport sizes. In some cases, the design calls for elements of
              the webpage to be displayed differently based on the viewport. For
              example, when implementing a modal for users to "rate a comment",
              the user interface needed to behave very different between mobile
              and desktop views.
            </p>
            <p>
              The mobile user is given an option to click <code>READ MORE</code>{' '}
              to show more text content beneath the article title and username,
              and by default is only shown the headlines.
            </p>
            <p>
              The desktop view, in contrast, shows a snippet of the text content
              beneath the titles by default, and the <code>READ MORE</code>{' '}
              button is conditionally shown when then text content exceeds a
              maximum snippet amouunt.
            </p>
          </div>
        </section>

        <section className="component_section section_wrap_reverse">
          <div className="component_box info space-top">
            <b>Sharing the good news</b>
            <p>
              In Portland, I lead monthly React.js
              <a
                href="https://github.com/shae-wat/react-workshops"
                target="_blank"
                className="space-around"
              >
                workshops
              </a>
              for Women Who Code. I ran hands-on React.js workshops for our
              members and grew the interest and aptitude of the community for
              Javascript and React development.
            </p>
            <p>
              Workshop projects included demonstrating the use of Chart.js as a
              React component and making React components display animated CSS.
            </p>
            <p>
              Leading these workshops allowed me to grow in my abilities as a
              developer from the collaboration and ideas shared by the
              attendees. I also grew as a leader on the keyboard, learning how
              to channel my abilities to lead a group of people to providing
              technical guidance while code-driving.
            </p>
          </div>
          <div className="component_box">
            <img src={loader} className={loaderClass} role="presentation" />
            <Tweet
              tweetId="796537445428830208"
              className="center-horizontally"
              options={{
                width: '100%',
              }}
              onLoad={this.removeLoader}
            />
          </div>
        </section>

        <section className="component_section_box info">
          <b>Slot Machine Game</b>
          <p>
            Web content should be playful and delightful! This is achieved by
            simple design and clever animations when handling time.
          </p>
          <p>
            This Slot Machine component that I made exemplifies the use of CSS
            animation and design to achieve a game experience. Click SPIN to
            start!
          </p>
          <SlotMachine
            numSlots={threeSlots.numSlots}
            slotOptions={threeSlots.slotOptions}
          />
        </section>

        <section className="component_section section_wrap_reverse">
          <div className="component_box info space-top">
            <b>Do something good with your space on the web.</b>
            <p>
              Protect your users. Believe in your users. Build something on the
              web that will make the world a better, more enabled, and more
              informed place.
            </p>
          </div>
          <div className="component_box">
            <img src={loader} className={loaderClass} role="presentation" />
            <Tweet
              tweetId="855888597035044864"
              className="center-horizontally"
              options={{
                width: '100%',
              }}
              onLoad={this.removeLoader}
            />
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

export default TechBabbleIndex
