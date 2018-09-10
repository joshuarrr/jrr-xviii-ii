import React from 'react'
import { withRouteData, Link } from 'react-static'
import Moment from 'react-moment'
import Markdown from 'react-markdown'
import { Img } from '../components/image-loader'


export default withRouteData(({ project }) => (
  <div className="page-content project-page">
    <div className="project">
      <Link to="/projects/">{'<'} Back</Link>
      <br />
      <h3>{project.data.title}</h3>
      <Moment format="MMMM Do, YYYY">{project.data.date}</Moment>
      <Img name={project.data.slug} />
      <Markdown source={project.content} escapeHtml={false} />
    </div>
  </div>
))
