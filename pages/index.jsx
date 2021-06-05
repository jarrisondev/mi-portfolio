import Header from '../components/Header/Header'
import Content from '../components/Home/Content'
import AboutMe from '../components/Home/AboutMe'
import Footer from '../components/Footer/Footer'
import Layout from '../components/Layout/Layout'

const index = () => {
	return (
		<Layout>
			<Header id='home' />
			<Content />
			<AboutMe />
			<Footer />
		</Layout>
	)
}

export default index
