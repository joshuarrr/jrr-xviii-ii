import React from 'react'
import { withRouteData, Link } from 'react-static'
import { Img } from '../components/img'
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
          <Img name={project.data.slug} />
        </li>
      ))}
    </ul>
  </div>
))
