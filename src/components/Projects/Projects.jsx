import { useEffect, useRef } from 'react'
import ProjectsGroup from './ProjectsGroup'
import styled from 'styles/Projects/Projects.module.scss'
import useScrollReveal from 'hooks/useScrollReveal'

const Projects = (props) => {
  const ProjectsRef = useRef(null)

  useEffect(() => {
    useScrollReveal(ProjectsRef.current)
  }, [])

  return (
    <section className={styled.Proyects} ref={ProjectsRef}>
      <h2>{props.language.text.title}</h2>
      {props.language.cards.map((projectsList, i) => (
        <ProjectsGroup key={i} projectsList={projectsList} text={props.language.text} />
      ))}
    </section>
  )
}

export default Projects
