import React from 'react'


// functional component takes props as the argument,
// "this" isn't used to get props
const Project = ({ project, projects }) => {
  // const currentProject = project || projects[0]
  const currentProject = project != null
    ? project
    : projects[0]
  return (
    <div className="project">
      <h2 className="project-title">{currentProject.title}</h2>
      <h2>This content is showing.</h2>
    </div>
  )
}

export default Project
