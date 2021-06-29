import styled from 'styles/Projects/Card/Card_1.module.scss'

const Card1 = (props) => {
  return (
    <div className={styled.Card_1}>
      <h4>{props.projectData.name}</h4>
      <p>{props.projectData.description}</p>
      <a href={props.projectData.url} target='_blank' rel='noreferrer'>
        {props.text}
      </a>
    </div>
  )
}

export default Card1
