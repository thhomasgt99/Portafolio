import React, { useContext } from 'react'
import Sections from '../components/sections'

const section1 = () => {
	React.useEffect(() => {
		const node = document.querySelector('.container-section1')
		// const line = document.querySelector('.line2')
		// line.style.background = '#FF4D5A'
		node.classList.add('slide')
		
	}, [])

	const img = 'https://i.imgur.com/PS4ZLRO.png'
	const title = 'Portafolio'
	const p = 'website'
	const url = 'portafolio'
	const numero = '01'
	return (
		<Sections
			img={img}
			url={url}
			title={title}
			p={p}
			id={1}
			numero={numero}
		/>
	)
}

export default section1