import styled from '../../styles/Home/Content.module.scss'

const Content = () => {
	return (
		<section className={styled.Content}>
			<div className={styled.firstPart}>
				<div className={styled.imgContent}>
					<img src='/Home/index.jpg' alt='foto de perfil' />
					<div className={styled.icons}>
						<a target='_blank' href='https://github.com/jarrisoncano'>
							<img src='/Home/icons/github.svg' alt='github icon' />
						</a>
						<a target='_blank' href='https://instagram.com/jarrisoncanom/'>
							<img src='/Home/icons/instagram.svg' alt='instagram icon' />
						</a>
						<a target='_blank' href='https://linkedin.com/in/jarrison-cano/'>
							<img src='/Home/icons/linkedin.svg' alt='linkedin icon' />
						</a>
					</div>
				</div>
				<div className={styled.title}>
					<svg xmlns='http://www.w3.org/2000/svg'>
						<rect fill='#FFE975' />
					</svg>
					<h1>
						Jarrison <br /> Cano.
					</h1>
				</div>
			</div>

			<div className={styled.secondPart}>
				<h3>
					Diseñador y Desarrollador <span>Web</span>
				</h3>
				<p>
					Hola, soy desarrollador front-end en React js. me apasiona la
					tecnología, los deportes, los videojuegos y aprender cosas nuevas.
				</p>

				<span className={styled.anchor}>
					<p>Contáctame</p>
					<svg role='img' viewBox='0 0 448 512'>
						<path d='M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z'></path>
					</svg>
				</span>
			</div>
		</section>
	)
}

export default Content