import Main from 'components/Main/Main'
import homeEs from 'locale/home/es.json'
import homeEn from 'locale/home/en.json'
import { useEffect, useState } from 'react'
import footerEn from 'locale/footer/en.json'
import footerEs from 'locale/footer/es.json'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import Layout from 'components/Layout/Layout'
import projectEs from 'locale/projects/es.json'
import projectEn from 'locale/projects/en.json'
import Projects from 'components/Projects/Projects'

function App () {
  const [locale, setLocale] = useState('es')
  const [theme, setTheme] = useState(true)

  const handlerLanguage = (locale) => {
    switch (locale) {
      case 'es':
        return {
          home: homeEs,
          project: projectEs,
          footer: footerEs
        }
      case 'en':
        return {
          home: homeEn,
          project: projectEn,
          footer: footerEn
        }
    }
  }

  useEffect(() => {
    if (theme) {
      document.querySelector('html').removeAttribute('scheme')
      document.querySelector('html').setAttribute('scheme', 'dark-mode')
    } else {
      document.querySelector('html').removeAttribute('scheme')
      document.querySelector('html').setAttribute('scheme', 'light-mode')
    }
  }, [theme])

  return (
    <Layout>
      <Header setLocale={setLocale} setTheme={setTheme} />
      <Main language={handlerLanguage(locale).home} />
      <Projects language={handlerLanguage(locale).project} />
      <Footer language={handlerLanguage(locale).footer} />
    </Layout>
  )
}

export default App
