import React from 'react'
import { Link } from 'react-static'
import Markdown from 'react-markdown'
import MediaQuery from 'react-responsive'
import { Img } from '../components/image-loader'


const ProjectSummaries = ({ projects, currentProject }) => (
  <dl className="projects project-summaries">
    <dt className="summaries-section-title">Case Studies</dt>
    {projects.map(project => ([
      <MediaQuery maxWidth={1023} key="mobile">
        <dd
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
        </dd>
      </MediaQuery>,
      <MediaQuery minWidth={1024} key="desktop">
        <dd
          className={
            currentProject &&
            project.data.slug === currentProject.data.slug
            ? 'project current-project'
            : 'project'
          }
          key={project.data.slug}
        >
          <Link
            className="project-summary-link"
            to={`/projects/project/${project.data.slug}`}>
            <Img
              className="project-cover"
              name={`portfolio/${project.data.slug}`}
            />
            <h2 className="project-title">
              {project.data.title}
            </h2>
          </Link>
          {/*
          <Link
            className="project-more-link"
            to={`/projects/project/${project.data.slug}`}>
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
