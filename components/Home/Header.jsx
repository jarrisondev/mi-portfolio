import styled from '../../styles/Home/components/Header.module.scss'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

const Header = (props) => {
	let link1 = useRef(null),
		link2 = useRef(null),
		link3 = useRef(null),
		link = ''

	useEffect(() => {
		if (props.id === 'home') link = link1.current
		else if (props.id === 'proyects') link = link2.current
		else if (props.id === 'abilities') link = link3.current

		link.classList.add('headerActive')
	}, [])

	return (
		<div className={styled.Header}>
			<ul>
				<Link href='/'>
					<li ref={link1}>INICIO</li>
				</Link>
				<Link href='/proyectos'>
					<li ref={link2}>PROYECTOS</li>
				</Link>
				<Link href='/habilidades'>
					<li ref={link3}>HABILIDADES</li>
				</Link>
			</ul>
		</div>
	)
}

export default Header
