import Content from './components/Main/Content'
import AboutMe from './components/Main/AboutMe'
import Footer from './components/Footer/Footer'
import Layout from './components/Layout/Layout'
import data_es from './data/projects/projects_es.json'
import Cards from './components/Projects/Cards'
import useLanguage from './hooks/useLanguage'
import Main from './components/Main/Main'

function App() {
	const { language } = useLanguage()
	return (
		<Layout>
			<Main />
			{(language ? data_en : data_es).cards.map((projectsList, i) => (
				<Cards key={i} projectsList={projectsList} text={data_es.text} />
			))}
			<Footer />
		</Layout>
	)
}

export default App
