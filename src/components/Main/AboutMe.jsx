import styled from 'styles/Main/AboutMe.module.scss'

const AboutMe = () => {
  return (
    <section className={styled.AboutMe}>
      <h2> SOBRE MÍ</h2>
      <div>
        <p>
          Actualmente vivo en Medellín, Colombia, dónde estudio la tecnología en
          diseño y desarrollo web en el Tecnológico de Antioquia (TdeA), mi
          hobby siempre ha sido la tecnología, lo que me llevó a aprender
          programación desde una edad muy temprana.
        </p>
        <svg xmlns='http://www.w3.org/2000/svg'>
          <rect fill='#FFE975' />
        </svg>
        <p>
          Soy un amante del desarrollo con JavaScript, mi Stack de desarrollo
          favorito es MERN (Mongo, Express, React Js, NodeJS). De igual forma,
          me gusta experimentar nuevas tecnologías como C++, Kotlin o Phyton.
        </p>
      </div>
    </section>
  )
}

export default AboutMe
