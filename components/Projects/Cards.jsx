import styled from '../../styles/Projects/Cards.module.scss'
import Card_1 from './Card/Card_1'

const Cards = ({ projectsList }) => {
	return (
		<>
			<div className={styled.Cards}>
				{projectsList.map((project_data) => {
					return <Card_1 key={project_data.id} project_data={project_data} />
				})}
			</div>
		</>
	)
}

export default Cards
