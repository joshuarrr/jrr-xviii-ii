import React from 'react'
import MediaQuery from 'react-responsive'
import { Link } from 'react-static'
import { Img } from '../components/image-loader'


const ProjectSummaries = ({ projects, currentProject }) => (
  <dl className="projects project-summaries">
    <dt className="summaries-section-title">Case Studies</dt>
    {projects.map(project => ([
      <MediaQuery maxWidth={1023} key="mobile">
        <dd
          className="project"
          key={project.title}
        >
          <Link to={`/projects/project/${project.title}`}>
            <h2 className="project-title">
              {project.title}
            </h2>
            <Img
              className="project-cover"
              name={`portfolio/${project.title}`}
            />
          </Link>
          { project.role &&
            <dl className="project-role">
              <dt>Role:</dt>
              <dd>{project.role}</dd>
            </dl>
          }
          { project.tech &&
            <dl className="project-tech">
              <dt>Tech:</dt>
              <dd>{project.tech}</dd>projects
            </dl>
          }
          <Link className="project-more-link" to={`/projects/project/${project.slug}`}>
            view project
          </Link>
        </dd>
      </MediaQuery>,
      <MediaQuery minWidth={1024} key="desktop">
        <dd
          className={
            currentProject &&
            project.slug === currentProject.slug
            ? 'project current-project'
            : 'project'
          }
          key={project.slug}
        >
          <Link
            className="project-summary-link"
            to={`/projects/project/${project.title}`}>
            <Img
              className="project-cover"
              name={`portfolio/${project.title}`}
            />
            <h2 className="project-title">
              {project.title}
            </h2>
          </Link>
          {/*
          <Link
            className="project-more-link"
            to={`/projects/project/${project.slug}`}>
            view project
          </Link>
          */}
        </dd>
      </MediaQuery>]
    ))}
    <dt className="summaries-section-title" key="past work">
      Previous Projects
    </dt>
  </dl>
)

export default ProjectSummaries
