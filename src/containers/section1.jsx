import React, { useContext } from 'react'
import Sections from '../components/sections'

const section1 = () => {
	React.useEffect(() => {
		const node = document.querySelector('.container-section1')
		node.classList.add('slide')

		const imagen = document.querySelector('.section1')
    const line = document.querySelector('.line2')
    const observer = new IntersectionObserver((event) => {
      const { isIntersecting } = event[0]
      if (isIntersecting) {
        line.style.background = '#FF4D5A'
      }else{
        line.style.background = '#ffffff'
      }

    },{threshold: '0.7'})
    observer.observe(imagen)
		
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