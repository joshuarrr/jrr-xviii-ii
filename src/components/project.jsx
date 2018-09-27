import React from 'react'
import Markdown from 'react-markdown'


// functional component takes props as the argument,
// "this" isn't used to get props
const Project = ({ project, projects }) => {
  // const currentProject = project || projects[0]
  const currentProject = project != null
    ? project
    : projects[0]
  return (
    <div className="project">
      <h2 className="project-title">{currentProject.data.title}</h2>
      <Markdown className="project-content" source={currentProject.content} escapeHtml={false} />
    </div>
  )
}

export default Project
