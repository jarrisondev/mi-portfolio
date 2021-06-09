import { useState } from 'react'
import Footer from './components/Footer/Footer'
import Layout from './components/Layout/Layout'
import data_es from './data/projects/projects_es.json'
import Main from './components/Main/Main'
import Projects from './components/Projects/Projects'

function App() {
	const [language, setLanguage] = useState(data_es)

	return (
		<Layout>
			<Main />
			<Projects language={language} />
			<Footer />
		</Layout>
	)
}

export default App
