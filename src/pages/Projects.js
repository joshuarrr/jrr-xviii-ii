import React, { Component } from 'react'
import { withRouteData, Link } from 'react-static'
import Markdown from 'react-markdown'
import MediaQuery from 'react-responsive'
import { Img } from '../components/image-loader'


const ProjectSummaries = ({ projects }) => (
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
              <dd>{project.data.tech}</dd>
            </dl>
          }
          <Link className="project-more-link" to={`projects/project/${project.data.slug}`}>
            view project
          </Link>
        </li>
      ))}
      <li className="project" key="past work">
        Previous Projects
      </li>
    </ul>
  </div>
)

// functional component takes props as the argument,
// "this" isn't used to get props
const Project = ({ project, projects }) => {
  // const currentProject = project || projects[0]
  const currentProject = project != null
    ? project
    : projects[0]
  return (
    <div className="page-content project-page">
      <div className="project">
        <h2 className="project-title">{currentProject.data.title}</h2>
        <Markdown className="project-content" source={currentProject.content} escapeHtml={false} />
      </div>
    </div>
  )
}

export class Projects extends Component {
  render () {
  // {console.log(projects)
    const projects = this.props.projects
    const currentProject = this.props.project != null
      ? this.props.project
      : this.props.projects[0]
    return ([
      <MediaQuery key="desktop" minWidth={1024}>
        <ProjectSummaries projects={projects} currentProject={currentProject}/>
        <Project project={currentProject} />
      </MediaQuery>,
      <MediaQuery key="mobile" maxWidth={1024}>
        {this.props.project == null
          ? <ProjectSummaries projects={projects} />
          : <Project project={currentProject} />
        }
      </MediaQuery>
    ])
  }
}

export default withRouteData(Projects)
