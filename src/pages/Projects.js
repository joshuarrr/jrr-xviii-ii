import React, { Component } from 'react'
import { withRouteData, Link } from 'react-static'
import { Img } from '../components/image-loader'
import Markdown from 'react-markdown'
import MediaQuery from 'react-responsive';

export class CurrentProject extends Component {
  constructor() {
    super();
    this.state = {
      currentProject: 1
    }
  }
  render () {
    return (
      <div className="page-content projects-page">
        <ul>
          {this.props.projects.map(project => (
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
              <Link className="project-more-link" to={`projects/project/${project.data.slug}`}>
                view project
              </Link>
            </li>
          ))}
          <li className="project" key="past work">
            Previous Projects
          </li>
        </ul>
        <MediaQuery minWidth={1024}>
          <CurrentProject />
        </MediaQuery>
      </div>
    )
  }
}

export default withRouteData(({ projects }) => <CurrentProject projects={projects} />)
