import S from '../../styles/Home/components/Content.module.scss'

const Content = () => {
  return (
    <div className={S.Content}>
      <div className={S.imageContent}>
        <img className={S.image} src='/Home/index.jpg' />
        <div className={S.icons}>
          <a target='_blank' href='https://github.com/jarrisoncano'>
            <img
              className={S.icon}
              src='/Home/icons/github.svg'
              alt='github icon'
            />
          </a>
          <a target='_blank' href='https://www.instagram.com/jarrisoncanom/'>
            <img
              className={S.icon}
              src='/Home/icons/instagram.svg'
              alt='instagram icon'
            />
          </a>
          <a
            target='_blank'
            href='https://www.linkedin.com/in/jarrison-cano-3b220a1a7/'
          >
            <img
              className={S.icon}
              src='/Home/icons/linkedin.svg'
              alt='linkedin icon'
            />
          </a>
        </div>
      </div>
      <div className={S.principalTextContent}>
        <svg
          className={S.svg}
          viewBox='0 0 16 173'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect className={S.rect} fill='#FFE975' />
        </svg>
        <h1 className={S.h1}>Jarrison Cano.</h1>
      </div>
      <div className={S.secondaryTextContent}>
        <h3 className={S.h3}>
          Diseñador y Desarrollador <span>Web</span>
        </h3>
        <p className={S.p}>
          Hola, soy desarrollador front-end en React js. me apasiona la
          tecnología, los deportes, los videojuegos y aprender cosas nuevas.
        </p>
      </div>
    </div>
  )
}

export default Content
