import React, { Component } from 'react'
import { withRouteData } from 'react-static'
import MediaQuery from 'react-responsive'
import ProjectSummaries from '../components/project-summaries'
import Project from '../components/project'
import '../styles/projects.css'


export class Projects extends Component {
  render () {
  // {console.log(projects)
    // console.log(this.props.pageNumber)
    // console.log(this.props.projects[0])
    const projects = this.props.projects
    const currentProject = this.props.project != null
      ? this.props.project
      : this.props.projects[0]
    return (
      <div className="projects-page">
        <MediaQuery key="desktop" minWidth={1024}>
          <ProjectSummaries
            projects={projects}
            currentProject={currentProject}
            page={this.props.pageNumber}
          />
          <Project project={currentProject} />
        </MediaQuery>
        <MediaQuery key="mobile" maxWidth={1023}>
          {this.props.project == null
            ? <ProjectSummaries projects={projects} currentProject={currentProject} />
            : <Project project={currentProject} />
          }
        </MediaQuery>
      </div>
    )
  }
}

export default withRouteData(Projects)
