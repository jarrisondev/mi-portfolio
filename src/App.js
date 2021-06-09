import { useContext } from 'react'
import Header from './components/Header/Header'
import Content from './components/Home/Content'
import AboutMe from './components/Home/AboutMe'
import Footer from './components/Footer/Footer'
import Layout from './components/Layout/Layout'
import data_es from './data/projects/projects_es.json'
import languageContext from './context/languageContext'
import Cards from './components/Projects/Cards'

function App() {
	const { language } = useContext(languageContext)

	return (
		<Layout>
			<Header id='home' />
			<Content />
			<AboutMe />
			{(language ? data_en : data_es).cards.map((projectsList, i) => (
				<Cards key={i} projectsList={projectsList} text={data_es.text} />
			))}
			<Footer />
		</Layout>
	)
}

export default App
