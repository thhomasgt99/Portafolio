import React, { useContext } from 'react'
import AppContext from '../context/AppContext'
import Sections from '../components/sections'

const section1 = () => {
	const { slide } = useContext(AppContext)

	React.useEffect(() => {
		slide('.section1')
	}, [])

	const img = 'https://kuon.space/assets/img/reile.jpg'
	const title = 'Portafolio'
	const p = 'website'
	const url = 'portafolio'
	return (
		<Sections
			img={img}
			url={url}
			title={title}
			p={p}
			id={1}
		/>
	)
}

export default section1