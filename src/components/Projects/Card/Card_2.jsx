import styled from '../../../styles/Projects/Card/Card_2.module.scss'

const Card_2 = (props) => {
	return (
		<div className={styled.Card_2}>
			<h3>{props.text[0]}</h3>
			<div>
				<p>
					<span>{props.text[1]}</span> <span></span>
					<span>{props.technologies[0]}</span>
				</p>
				<p>
					<span>{props.text[2]}</span> <span></span>
					<span>{props.technologies[1]}</span>
				</p>
				<p>
					<span>{props.text[3]}</span> <span></span>
					<span>{props.technologies[2]}</span>
				</p>
			</div>
		</div>
	)
}

export default Card_2
