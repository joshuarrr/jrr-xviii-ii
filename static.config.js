import React, { Component } from 'react'
import autoprefixer from 'autoprefixer'
import nested from 'postcss-nested'
import calc from 'postcss-calc'
import colorAlpha from 'postcss-color-alpha'
import advancedVars from 'postcss-advanced-variables'
import customMedia from 'postcss-custom-media'
import mediaMinMax from 'postcss-media-minmax'
import functions from 'postcss-functions'
import postcssImport from 'postcss-import'
import colorFunc from 'postcss-color-function'
import conditionals from 'postcss-conditionals'

const path = require('path')
const fs = require('fs')
const klaw = require('klaw')
const matter = require('gray-matter')

function getContent (type) {
  // console.log(type);
  const contentType = type
  const items = []
  // Walk ("klaw") through projects directory and push file paths into items array //
  const getFiles = () => new Promise(resolve => {
    // Check if projects directory exists //
    if (fs.existsSync(`./src/content/${contentType}`)) {
      klaw(`./src/content/${contentType}`)
        .on('data', item => {
          // Filter function to retrieve .md files //
          if (path.extname(item.path) === '.md') {
            // If markdown file, read contents //
            const data = fs.readFileSync(item.path, 'utf8')
            // Convert to frontmatter object and markdown content //
            const dataObj = matter(data)
            // Create slug for URL //
            dataObj.data.slug = dataObj.data.title
              .toLowerCase()
              .replace(/ /g, '-')
              .replace(/[^\w-]+/g, '')
            // Remove unused key //
            delete dataObj.orig
            // Push object into items array //
            items.push(dataObj)
          }
        })
        .on('error', e => {
          console.log(e)
        })
        .on('end', () => {
          // Resolve promise for async getRoutes request //
          // projects = items for below routes //
          resolve(items)
        })
    } else {
      // If src/projects directory doesn't exist, return items as empty array //
      resolve(items)
    }
  })
  return getFiles()
}

export default {
  getSiteData: async () => ({
    title: 'JOSHUAR 🦁',
    projects: await getContent('projects'),
  }),

  getRoutes: async () => {
    const projects = await getContent('projects');
    const profile = await getContent('profile');
    // console.log(profile);
    return [
      {
        path: '/',
        component: 'src/pages/Home',
        getData: () => ({
          pageNumber: 1,
        }),
      },
      {
        path: '/contact',
        component: 'src/pages/Contact',
        getData: () => ({
          pageNumber: 2,
        }),
      },
      {
        path: '/profile',
        component: 'src/pages/Profile',
        getData: () => ({
          profile,
          pageNumber: 3,
        }),
      },
      {
        path: '/projects',
        component: 'src/pages/Projects',
        getData: () => ({
          projects,
          pageNumber: 4,
        }),
        children: projects.map((project, index) => ({
          path: `/project/${project.data.title}`,
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
        getData: () => ({
          pageNumber: 5,
        }),
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
