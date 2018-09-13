import React from 'react'
import { withRouteData, Link } from 'react-static'
import Moment from 'react-moment'
import Markdown from 'react-markdown'
import { Img } from '../components/image-loader'
import '../styles/projects.css'


export default withRouteData(({ project }) => (
  <div className="page-content project-page">
    <div className="project">
      {/*<Link to="/projects/">{'<'} Back</Link>*/}
      <h2 className="project-title">{project.data.title}</h2>
      <Img className="project-cover" name={project.data.slug} />
      <Markdown className="project-content" source={project.content} escapeHtml={false} />
    </div>
  </div>
))
