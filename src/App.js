import React from 'react'
import Routes from 'react-static-routes'
import PropTypes from 'prop-types'
import { Router, Route, cleanPath, withRouteData } from 'react-static'
import { hot } from 'react-hot-loader'
import { NodeGroup } from 'react-move'
import { withContext, getContext } from 'recompose'
import { PageWrapper } from './components/page-wrapper'
import './styles/app.css'

// Console message
setTimeout(console.log.bind(console, '%cHelvetica Sucks!!',
  `color: purple;
   font-size: 30px;
   font-weight: bold;
   font-family: "Comic Sans MS";
  `), 0)

// The magic :)
const AnimatedRoutes = getContext({

  // We have to preserve the router context for each route
  // otherwise, a component may rerender with the wrong data
  // during animation
  router: PropTypes.object,
  // We'll also look for the staticURL, so we can disable the animation during static render
  staticURL: PropTypes.string,
})(({ getComponentForPath, router, staticURL }) => (
  <Route
    path="*"
    render={props => {
      // Get the component for this path
      let Comp = getComponentForPath(cleanPath(props.location.pathname))
      if (!Comp) {
        Comp = getComponentForPath('404')
      }

      // When we're rendering for static HTML, be sure to NOT animate in.
      if (staticURL) {
        return (
          // This relative wrapper is necessary for accurate rehydration :)
          <div style={{ position: 'relative' }}>
            <Comp {...props} />
          </div>
        )
      }

      // Use React-Move to animate the different components coming in and out
      const lastSegment = props.location.pathname.split('/').pop()
      const pathClass = lastSegment ? lastSegment : "home"

      return (
        <PageWrapper>
          <NodeGroup
            // React-move will handle the entry and exit of any items we pass in `data`
            data={[
              {
                // pass the current Comp, props, ID and router
                id: props.location.pathname,
                Comp,
                props,
                router,
              },
            ]}
            keyAccessor={d => d.id}
            start={() => ({
              opacity: [0],
              scale: 1,
              translateX: [0],
            })}
            enter={() => ({
              opacity: [1],
              translateX: [0],
              timing: { duration: 1000, delay: 500 },
            })}
            update={() => ({
              opacity: [1],
            })}
            leave={() => ({
              opacity: [0],
              translateX: [-100],
              timing: { duration: 500 },
            })}
          >
            {nodes => (
              <div className={`route-wrapper ${pathClass}`} style={{ position: 'relative', minHeight: '100%' }}>
                {nodes.map(({ key, data, state: { opacity, translateX } }) => {
                  // Here, we override the router context with the one that was
                  // passed with each route
                  const PreservedRouterContext = withContext(
                    {
                      router: PropTypes.object,
                    },
                    () => ({
                      router: data.router,
                    }),
                  )(props => <div {...props} />)

                  return (
                    <PreservedRouterContext
                      className="router-context"
                      key={key}
                      style={{
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        transform: `translateX(${translateX}vw)`,
                        opacity,
                        zIndex: 1,
                      }}
                    >
                    <data.Comp {...data.props} />
                    </PreservedRouterContext>
                  )
                })}
              </div>
            )}
          </NodeGroup>
        </PageWrapper>
      )
    }}
  />
))

const App = () => (
  <Router>
    <Routes component={AnimatedRoutes} />
  </Router>
)

export default hot(module)(App); withRouteData()
