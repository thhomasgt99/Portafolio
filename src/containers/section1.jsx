import React, { useContext } from 'react'
import Sections from '../components/sections'

const section1 = () => {
	var flag = 0
	React.useEffect(() => {
		const node = document.querySelector('.container-section1')
		const line = document.querySelector('.line2')
		const observer = new IntersectionObserver((objeto) => {
			objeto.forEach(entry => {
				if (entry.isIntersecting) {
					window.addEventListener('scroll', () => {
						const scrollable = window.scrollY
						if (scrollable >= 600 || flag === 0) { //por alguna extraña brujeria no puedo eliminar esta vandera pq el scroll deja de funcionar jaja
							const sectionDesplazandeTop = document.querySelector('.section1')
							const sectionDesplazandeBottom = document.querySelector('.section2')
							if (sectionDesplazandeTop.classList.contains('top3')) {
							} else {
								sectionDesplazandeTop.classList.remove('top2')
								sectionDesplazandeTop.classList.add('top3')
								sectionDesplazandeBottom.classList.add('top3')
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