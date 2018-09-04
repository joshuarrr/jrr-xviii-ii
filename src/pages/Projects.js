import React from 'react'
import { withRouteData, Link } from 'react-static'
//

export default withRouteData(({ projects }) => (
  <div className="page-content projects-page">
    <ul>
      {projects.map(project => (
        <li key={project.data.slug}>
          <img className="image" src={project.data.thumbnail} alt="" />
          <Link to={`projects/project/${project.data.slug}`}>
            {project.data.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
))
