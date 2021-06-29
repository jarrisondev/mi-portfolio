import { useState } from 'react'
import Footer from 'components/Footer/Footer'
import Layout from 'components/Layout/Layout'
import projectsEs from 'locale/projects/es.json'
import homeEs from 'locale/home/es.json'
import Main from 'components/Main/Main'
import Projects from 'components/Projects/Projects'

const localeEs = {
  projectsEs,
  homeEs
}

function App () {
  const [language] = useState(localeEs)

  return (
    <Layout>
      <Main />
      <Projects language={language.projectsEs} />
      <Footer />
    </Layout>
  )
}

export default App
