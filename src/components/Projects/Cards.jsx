import styled from '../../styles/Projects/Cards.module.scss'
import Card_1 from './Card/Card_1'
import Card_2 from './Card/Card_2'

const Cards = (props) => {
	return (
		<>
			<div className={styled.Cards}>
				{props.projectsList.map((project_data) => {
					return (
						<Card_1
							key={project_data.id}
							project_data={project_data}
							text={props.text.card_1}
						/>
					)
				})}
				{props.projectsList.map((project_data) => {
					return (
						<Card_2
							key={project_data.id}
							technologies={project_data.technologies}
							text={props.text.card_2}
						/>
					)
				})}
			</div>
		</>
	)
}

export default Cards
