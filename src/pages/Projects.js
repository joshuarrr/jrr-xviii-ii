import React from 'react'
import { withRouteData, Link } from 'react-static'
import { Img } from '../components/image-loader'
//

export default withRouteData(({ projects }) => (
  <div className="page-content projects-page">
    <ul>
      {projects.map(project => (
        <li  className="project" key={project.data.slug}>
          <img className="image" src={project.data.thumbnail} alt="" />
          <h2 className="project-title">
            <Link to={`projects/project/${project.data.slug}`}>
              {project.data.title}
            </Link>
          </h2>
          <Img className="project-cover" name={"portfolio/" + project.data.slug} />
        </li>
      ))}
    </ul>
  </div>
))
