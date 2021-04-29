import styles from '../../styles/Home/components/Header.module.scss'
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
    <div className={styles.Header}>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <Link href='/'>
            <li ref={link1} className={styles.li}>
              INICIO
            </li>
          </Link>
          <Link href='/proyectos'>
            <li ref={link2} className={styles.li}>
              PROYECTOS
            </li>
          </Link>
          <Link href='/habilidades'>
            <li ref={link3} className={styles.li}>
              HABILIDADES
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Header
