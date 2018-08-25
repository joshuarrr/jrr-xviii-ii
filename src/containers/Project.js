import React from 'react'
import { withRouteData, Link } from 'react-static'
import Moment from 'react-moment'
import Markdown from 'react-markdown'
//

export default withRouteData(({ project }) => (
  <div className="page-content project-page">
    <div className="project">
      <Link to="/work/">{'<'} Back</Link>
      <br />
      <h3>{project.data.title}</h3>
      <Moment format="MMMM Do, YYYY">{project.data.date}</Moment>
      <img className="image" src={project.data.thumbnail} alt="" />
      <Markdown source={project.content} escapeHtml={false} />
    </div>
  </div>
))
