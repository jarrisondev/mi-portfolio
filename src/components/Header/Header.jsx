import styled from '../../styles/Header/Header.module.scss'
import { useEffect, useRef } from 'react'

const Header = (props) => {
	let link1 = useRef(null),
		link2 = useRef(null),
		link3 = useRef(null),
		link = ''

	useEffect(() => {
		if (props.id === 'home') link = link1.current
		else if (props.id === 'projects') link = link2.current
		else if (props.id === 'abilities') link = link3.current

		link.classList.add('headerActive')
	}, [])

	return (
		<div className={styled.Header}>
			<ul>
				<li ref={link1}>INICIO</li>
				<li ref={link2}>PROYECTOS</li>
				<li ref={link3}>HABILIDADES</li>
			</ul>
		</div>
	)
}

export default Header
