import styled from '../../../styles/Projects/Card/Card_1.module.scss'

const Card_1 = (props) => {
	return (
		<div className={styled.Card_1}>
			<h4>{props.project_data.name}</h4>
			<p>{props.project_data.description}</p>
			<a href={props.project_data.url} target='_blank'>
				{props.text}
			</a>
		</div>
	)
}

export default Card_1
