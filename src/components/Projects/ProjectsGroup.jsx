import { useEffect, useRef } from 'react'
import useScrollReveal from 'hooks/useScrollReveal'
import styled from 'styles/Projects/ProjectsGroup.module.scss'
import Card1 from './Card/Card1'
import Card2 from './Card/Card2'

const ProjectsGroup = (props) => {
  const CardsRef = useRef(null)

  useEffect(() => {
    useScrollReveal(CardsRef.current, undefined, 0.05)
  }, [])

  return (
    <>
      <div className={styled.ProjectsGroup} ref={CardsRef}>
        {props.projectsList.map((projectData, i) => {
          return (
            <div className='project' key={i}>
              <Card1
                projectData={projectData}
                text={props.text.card1}
              />
              <Card2
                technologies={projectData.technologies}
                text={props.text.card2}
              />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default ProjectsGroup
