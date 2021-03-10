import S from '../../styles/Home/components/Header.module.scss'
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
    <div className={S.Header}>
      <nav className={S.nav}>
        <ul className={S.ul}>
          <Link href='/'>
            <li ref={link1} className={S.li}>
              INICIO
            </li>
          </Link>
          <Link href='/proyectos'>
            <li ref={link2} className={S.li}>
              PROYECTOS
            </li>
          </Link>
          <Link href='/habilidades'>
            <li ref={link3} className={S.li}>
              HABILIDADES
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Header
