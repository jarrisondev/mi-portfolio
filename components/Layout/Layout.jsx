import { useState } from 'react'
import styled from '../../styles/Layout/Layout.module.scss'
import languageContext from '../../context/languageContext'

const Layout = ({ children }) => {
	const [language, setLanguage] = useState(false)

	return (
		<languageContext.Provider value={{ language, setLanguage }}>
			<div className={styled.Layout}>{children}</div>
		</languageContext.Provider>
	)
}

export default Layout
