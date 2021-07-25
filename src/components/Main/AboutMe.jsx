import styled from 'styles/Main/AboutMe.module.scss'

const AboutMe = (props) => {
  return (
    <section className={styled.AboutMe}>
      <h2> {props.language.title}</h2>
      <div>
        <p>{props.language.description.part1}</p>
        <svg xmlns='http://www.w3.org/2000/svg'>
          <rect fill='#FFE975' />
        </svg>
        <p>{props.language.description.part2}</p>
      </div>
    </section>
  )
}

export default AboutMe
