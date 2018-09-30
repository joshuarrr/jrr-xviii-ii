import React from 'react'
import { withRouteData } from 'react-static'
import Markdown from 'react-markdown'
import '../styles/projects.css'


export default withRouteData(({ project }) => (
  <div className="page-content project-page">
    <div className="project">
      {/* <Link to="/projects/">{'<'} Back</Link> */}
      <h2 className="project-title">{project.data.title}</h2>
      <Markdown className="project-content" source={project.content} escapeHtml={false} />
    </div>
  </div>
))
