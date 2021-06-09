import Header from '../components/Header/Header'
import Cards from '../components/Projects/Cards'
import Layout from '../components/Layout/Layout'
import Footer from '../components/Footer/Footer'
import data_es from '../data/projects/projects_es.json'
import { useContext } from 'react'
import languageContext from '../context/languageContext'

const projects = () => {
	const { language } = useContext(languageContext)

	return (
		<Layout>
			<Header id='projects' />
			{(language ? data_en : data_es).cards.map((projectsList, i) => (
				<Cards key={i} projectsList={projectsList} text={data_es.text} />
			))}
			<Footer />
		</Layout>
	)
}

export default projects
