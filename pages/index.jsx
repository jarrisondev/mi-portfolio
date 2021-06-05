import styles from '../styles/Home/Home.module.scss'
import Header from '../components/Home/Header'
import Content from '../components/Home/Content'
import AboutMe from '../components/Home/AboutMe'
import Footer from '../components/Footer/Footer'

const index = () => {
	return (
		<div className={styles.HomeContainer}>
			<div className={styles.HomeContent}>
				<Header id='home' />
				<Content />
				<AboutMe />
				<Footer />
			</div>
		</div>
	)
}

export default index
