import Header from '../components/Header/Header'
import Cards from '../components/Projects/Cards'
import Layout from '../components/Layout/Layout'
import Footer from '../components/Footer/Footer'
import data_es from '../data/projects_es.json'

const projects = () => {
	return (
		<Layout>
			<Header id='projects' />
			{data_es.map((projectsList, i) => (
				<Cards key={i} projectsList={projectsList} />
			))}
			<Footer />
		</Layout>
	)
}

export default projects
