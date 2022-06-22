import React, { useContext } from 'react'
import AppContext from '../context/AppContext'
import Sections from '../components/sections'

const section2 = () => {
	const { slide } = useContext(AppContext)

	React.useEffect(() => {
		slide('.section2')
	}, [])

	const img = 'https://kuon.space/assets/img/reile.jpg'
	const title = 'About Me'
	const p = 'I love Design, Technology, and Story.'
	const url = 'portafolio2'
	return (
		<Sections
			img={img}
			url={url}
			title={title}
			p={p}
			id={2}
		/>
	)
}

export default section2