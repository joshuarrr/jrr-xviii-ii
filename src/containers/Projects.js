import React from 'react'
import { withRouteData, Link } from 'react-static'
//

export default withRouteData(({ projects }) => (
  <div>
    <h1>It's blog time.</h1>
    <br />
    All Posts:
    <ul>
      {projects.map(project => (
        <li key={project.data.slug}>
          <Link to={`/work/project/${project.data.slug}`}>{project.data.title}</Link>
        </li>
      ))}
    </ul>
  </div>
))
