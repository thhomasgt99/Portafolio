import React, { useContext } from 'react'
import Sections from '../components/sections'

const section2 = () => {
	React.useEffect(() => {
			const node = document.querySelector('.container-section2')
			// const line = document.querySelector('.line3')
			// line.style.background = '#FF4D5A'
			node.classList.add('slide')
	}, [])

	const img = 'https://i.imgur.com/FtzfFYd.png'
	const title = 'Sobre mi'
	const p = 'Me encanta la tecnología y el diseño.'
	const url = 'about'
	const numero = '02'
	return (
		<Sections
			img={img}
			url={url}
			title={title}
			p={p}
			id={2}
			numero={numero}
		/>
	)
}

export default section2