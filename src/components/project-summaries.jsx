import React from 'react'
import { Link } from 'react-static'
import Markdown from 'react-markdown'
import MediaQuery from 'react-responsive'
import { Img } from '../components/image-loader'


const ProjectSummaries = ({ projects, currentProject }) => (
  <ul className="projects project-summaries">
    {projects.map(project => ([
      <MediaQuery maxWidth={1023} key="mobile">
        <li
          className="project"
          key={project.data.slug}
        >
          <Link to={`/projects/project/${project.data.slug}`}>
            <h2 className="project-title">
              {project.data.title}
            </h2>
            <Img
              className="project-cover"
              name={`portfolio/${project.data.slug}`}
            />
          </Link>
          <Markdown
            className="project-content"
            source={project.data.summary}
            escapeHtml={false}
          />
          { project.data.role &&
            <dl className="project-role">
              <dt>Role:</dt>
              <dd>{project.data.role}</dd>
            </dl>
          }
          { project.data.tech &&
            <dl className="project-tech">
              <dt>Tech:</dt>
              <dd>{project.data.tech}</dd>projects
            </dl>
          }
          <Link className="project-more-link" to={`/projects/project/${project.data.slug}`}>
            view project
          </Link>
        </li>
      </MediaQuery>,
      <MediaQuery minWidth={1024} key="desktop">
        <li
          className={
            currentProject &&
            project.data.slug === currentProject.data.slug
            ? 'project current-project'
            : 'project'
          }
          key={project.data.slug}
        >
          <Link to={`/projects/project/${project.data.slug}`}>
            <h2 className="project-title">
              {project.data.title}
            </h2>
            <Img
              className="project-cover"
              name={`portfolio/${project.data.slug}`}
            />
          </Link>
          <Link
            className="project-more-link"
            to={`/projects/project/${project.data.slug}`}>
            view project
          </Link>
        </li>
      </MediaQuery>]
    ))}
    <li className="project" key="past work">
      Previous Projects
    </li>
  </ul>
)

export default ProjectSummaries
