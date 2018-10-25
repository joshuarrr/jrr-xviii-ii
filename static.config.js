import React, { Component } from 'react'
// PostCSS
import autoprefixer from 'autoprefixer'
import nested from 'postcss-nested'
import calc from 'postcss-calc'
import colorAlpha from 'postcss-color-alpha'
import advancedVars from 'postcss-advanced-variables'
import extend from 'postcss-extend'
import customMedia from 'postcss-custom-media'
import mediaMinMax from 'postcss-media-minmax'
import functions from 'postcss-functions'
import postcssImport from 'postcss-import'
import colorFunc from 'postcss-color-function'
import conditionals from 'postcss-conditionals'
// json
import projects from './src/data/projects'
// etc
const path = require('path')
//


export default {
  getSiteData: async () => ({
    title: 'JOSHUAR 🦁',
  }),

  getRoutes: async () => {
    // console.log('projects: ', projects)
    return [
      {
        path: '/',
        component: 'src/pages/Home',
        getData: () => {
          return {
            projects,
          }
        },
      },
      {
        path: '/contact',
        component: 'src/pages/Contact',
      },
      {
        path: '/profile',
        component: 'src/pages/Profile',
      },
      {
        path: '/projects',
        component: 'src/pages/Projects',
        getData: () => {
          return {
            projects,
          }
        },
        // Note: the parentheses after fat arrow allow it to return
        // an object {...} and not interpret the braces as the opening
        // of a block which would require a `return` since that makes it
        // a statement body instead of an expression body!
        children: projects.map((project, index) => ({
          path: `project/${project.title.toLowerCase()}`,
          component: 'src/pages/Projects',
          getData: () => ({
            currentProject: index,
            project,
            projects,
          }),
        })),
      },
      {
        path: '/process',
        component: 'src/pages/Process',
      },
      {
        is404: true,
        component: 'src/pages/404',
      },
    ]
  },

  webpack: (config, { stage, defaultLoaders }) => {
    let loaders = [
      {
        loader: 'css-loader',
        options: {
          minimize: stage !== 'dev',
          importLoaders: 1,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          // Necessary for external CSS imports to work
          // https://github.com/facebookincubator/create-react-app/issues/2677
          ident: 'postcss',
          plugins: () => [
            postcssImport,
            autoprefixer({
              browsers: [
                '>1%',
                'last 4 versions',
                'Firefox ESR',
                'not ie < 9', // React doesn't support IE8 anyway
              ],
            }),
            colorAlpha,
            functions({
              glob: path.join(__dirname, 'src/styles/functions', '*.js'),
            }),
            advancedVars,
            customMedia,
            mediaMinMax,
            extend,
            nested,
            calc,
            colorFunc,
            conditionals,
          ],
        },
      },
    ]

    if (stage === 'dev') {
      loaders = ['style-loader'].concat(loaders)
    } else if (stage === 'prod') {
      loaders = ['style-loader'].concat(loaders)
    }

    config.module.rules = [
      {
        oneOf: [
          defaultLoaders.jsLoader,
          {
            test: /\.css$/,
            use: loaders,
          },
          defaultLoaders.fileLoader,
        ],
      },
    ]
    return config
  },

  Document: class CustomDocument extends Component {
    render () {
      const {
        Html, Head, Body, children, renderMeta,
      } = this.props

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width" />
          </Head>
          <Body>{children}</Body>
        </Html>
      )
    }
  },
}
