import S from '../styles/Home/Home.module.scss'
import Header from '../components/Home/Header'
import Content from '../components/Home/Content'
import AboutMe from '../components/Home/AboutMe'

const index = () => {
  return (
    <div className={S.HomeContainer}>
      <Header id='home' />
      <Content />
      <AboutMe />
    </div>
  )
}

export default index