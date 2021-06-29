import styled from 'styles/Layout/Layout.module.scss'

const Layout = ({ children }) => {
  return <div className={styled.Layout}>{children}</div>
}

export default Layout
