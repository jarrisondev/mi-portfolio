import styled from 'styles/Footer/Footer.module.scss'

const Footer = (props) => {
  return (
    <footer className={styled.footer}>
      <p>
        {props.language.footer[0]} <span>&lt;3</span><a href='https://github.com/jarrisoncano' target='_blank' rel='noreferrer'>{props.language.footer[1]}</a>
      </p>
    </footer>
  )
}

export default Footer
