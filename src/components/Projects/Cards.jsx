import { useEffect, useRef } from 'react'
import useScrollReveal from 'hooks/useScrollReveal'
import styled from 'styles/Projects/Cards.module.scss'
import Card1 from './Card/Card1'
import Card2 from './Card/Card2'

const Cards = (props) => {
  const CardsRef = useRef(null)

  useEffect(() => {
    useScrollReveal(CardsRef.current, 500)
  }, [])

  return (
    <>
      <div className={styled.Cards} ref={CardsRef}>
        {props.projectsList.map((projectData) => {
          return (
            <Card1
              key={projectData.id}
              projectData={projectData}
              text={props.text.card1}
            />
          )
        })}
        {props.projectsList.map((projectData) => {
          return (
            <Card2
              key={projectData.id}
              technologies={projectData.technologies}
              text={props.text.card2}
            />
          )
        })}
      </div>
    </>
  )
}

export default Cards
