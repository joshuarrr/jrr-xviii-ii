import React from 'react'
import Hilights from '../pages/projects/Hilights'
import Lumen from '../pages/projects/Lumen'
import Idealist from '../pages/projects/Idealist'

const componentMap = {
  Hilights,
  Lumen,
  Idealist,
}

// functional component takes props as the argument,
// "this" isn't used to get props
const Project = ({ project, projects }) => {
  // const currentProject = project || projects[0]
  const currentProject = project != null
    ? project
    : projects[0]

  const ContentComponent = componentMap[project.title]

  return (
    <div className="project">
      <h2 className="project-title">{currentProject.title}</h2>
      <ContentComponent />
    </div>
  )
}

export default Project
