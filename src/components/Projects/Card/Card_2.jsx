const Card_2 = (props) => {
	return (
		<div>
			<p>
				{props.text[0]} {props.technologies[0]}
			</p>
			<p>
				{props.text[1]} {props.technologies[1]}
			</p>
			<p>
				{props.text[2]} {props.technologies[2]}
			</p>
		</div>
	)
}

export default Card_2
