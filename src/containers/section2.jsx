import React, { useContext } from 'react'
import Sections from '../components/sections'

const section2 = () => {
	var flag = 0
	React.useEffect(() => {
		const node = document.querySelector('.container-section2')
		const line = document.querySelector('.line3')
		const observer = new IntersectionObserver((objeto) => {
			objeto.forEach(entry => {
				if (entry.isIntersecting) {
					window.addEventListener('scroll', () => {
						const scrollable = window.scrollY
						if (scrollable >= 800 || flag === 0) { //por alguna extraña brujeria no puedo eliminar esta vandera pq el scroll deja de funcionar jaja
							const sectionDesplazandeTop = document.querySelector('.section2')
							const sectionDesplazandeBottom = document.querySelector('.section3')
							if (sectionDesplazandeTop.classList.contains('top4')) {
							} else {
								sectionDesplazandeTop.classList.remove('top3')
								sectionDesplazandeTop.classList.add('top4')
								sectionDesplazandeBottom.classList.add('top4')
							}
						}
					})
					node.classList.add('slide')
					line.style.background = '#FF4D5A'
				} else {
					line.style.background = '#ffffff'
				}
			})
		}, { threshold: 0.75 }
		)
		observer.observe(node)
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