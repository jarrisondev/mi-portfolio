import { useState } from 'react'

const useLanguage = () => {
	const [language, setLanguage] = useState(false)

	return { language, setLanguage }
}

export default useLanguage
