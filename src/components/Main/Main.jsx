import AboutMe from './AboutMe'
import Content from './Content'

const Main = (props) => {
  return (
    <main>
      <Content language={props.language.content} />
      <AboutMe language={props.language.aboutMe} />
    </main>
  )
}

export default Main
