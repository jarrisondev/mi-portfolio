import Cards from './Cards'
import styled from '../../styles/Projects/Cards.module.scss'

const Projects = (props) => {
	return (
		<section className={styled.Proyects}>
			<h2>{props.language.text.title}</h2>
			{props.language.cards.map((projectsList, i) => (
				<Cards key={i} projectsList={projectsList} text={props.language.text} />
			))}
		</section>
	)
}

export default Projects
