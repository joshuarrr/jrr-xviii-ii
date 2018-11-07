import React, { Component } from 'react'
import { RouteData } from 'react-static'
import { Animate } from 'react-move'
import Div100vh from './react-div-100vh/'
import { Header } from './header'
import { Footer } from './footer'


export class PageWrapper extends Component {
  debugger

  render = () => (
    <Div100vh
      style={{ minHeight: '100rvh' }}
      className="page-wrap"
    >
      <Animate
        show
        start={{ // the starting state (required)
          opacity: [0],
        }}
        enter={{ // how to transform state on enter (optional)
          opacity: [1],
          timing: { duration: 1000, delay: 1000 },
        }}
      >
        {({ opacity }) => (
          <Header
            // pageNum={`${pageNumber}`}
            style={{ opacity }}
            key="header"
          />
        )}
      </Animate>
      <main className="content">
        { this.props.children }
      </main>
      <Animate
        show
        start={{ // the starting state (required)
          opacity: [0],
        }}

        enter={{ // how to transform state on enter (optional)
          opacity: [1],
          timing: { duration: 1000, delay: 1000 },
        }}
      >
        {({ opacity }) => (
          <Footer
            className="footer"
            style={{ opacity }}
          />
        )}
      </Animate>
    </Div100vh>
  )
}
