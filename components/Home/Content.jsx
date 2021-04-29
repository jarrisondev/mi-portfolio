import Link from 'next/link'
import styles from '../../styles/Home/components/Content.module.scss'

const Content = () => {
  return (
    <div className={styles.Content}>
      <div className={styles.imageContent}>
        <img className={styles.image} src='/Home/index.jpg' />
      </div>
      <div className={styles.icons}>
        <a target='_blank' href='https://github.com/jarrisoncano'>
          <img
            className={styles.icon}
            src='/Home/icons/github.svg'
            alt='github icon'
          />
        </a>
        <a target='_blank' href='https://www.instagram.com/jarrisoncanom/'>
          <img
            className={styles.icon}
            src='/Home/icons/instagram.svg'
            alt='instagram icon'
          />
        </a>
        <a
          target='_blank'
          href='https://www.linkedin.com/in/jarrison-cano-3b220a1a7/'
        >
          <img
            className={styles.icon}
            src='/Home/icons/linkedin.svg'
            alt='linkedin icon'
          />
        </a>
      </div>
      <div className={styles.principalTextContent}>
        <svg
          className={styles.svg}
          viewBox='0 0 16 173'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect className={styles.rect} fill='#FFE975' />
        </svg>
        <h1 className={styles.h1}>Jarrison Cano.</h1>
      </div>
      <div className={styles.secondaryTextContent}>
        <h3 className={styles.h3}>
          Diseñador y Desarrollador <span>Web</span>
        </h3>
        <p className={styles.p}>
          Hola, soy desarrollador front-end en React js. me apasiona la
          tecnología, los deportes, los videojuegos y aprender cosas nuevas.
        </p>
      </div>
      <Link href='/contact'>
        <span className={styles.anchor}>
          <p>Contáctame</p>
          <svg role='img' viewBox='0 0 448 512'>
            <path d='M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z'></path>
          </svg>
        </span>
      </Link>
    </div>
  )
}

export default Content
