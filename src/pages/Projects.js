import React from 'react'
import { withRouteData, Link } from 'react-static'
import { Img } from '../components/image-loader'
import Markdown from 'react-markdown'


export default withRouteData(({ projects }) => (
  <div className="page-content projects-page">
    <ul>
      {projects.map(project => (
        <li className="project" key={project.data.slug}>
            <Link to={`projects/project/${project.data.slug}`}>
              <h2 className="project-title">
                {project.data.title}
              </h2>
              <Img
                className="project-cover"
                name={"portfolio/" + project.data.slug}
              />
            </Link>
          <Markdown
            className="project-content"
            source={project.data.summary}
            escapeHtml={false}
          />
        </li>
      ))}
      <li className="project" key="past work">
        Previous Projects
      </li>
    </ul>
  </div>
))
