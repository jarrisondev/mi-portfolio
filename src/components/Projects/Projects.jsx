import Cards from './Cards'

const Projects = (props) => {
	return (
		<>
			{props.language.cards.map((projectsList, i) => (
				<Cards key={i} projectsList={projectsList} text={props.language.text} />
			))}
		</>
	)
}

export default Projects
