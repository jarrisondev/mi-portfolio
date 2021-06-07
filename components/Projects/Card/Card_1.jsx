import styled from '../../../styles/Projects/Card/Card_1.module.scss'

const Card_1 = ({ project_data }) => {
	return (
		<div className={styled.Card_1}>
			<h4>{project_data.name}</h4>
			<p>{project_data.description}</p>
			<a href={project_data.url} target='_blank'>
				Ver
			</a>
		</div>
	)
}

export default Card_1
