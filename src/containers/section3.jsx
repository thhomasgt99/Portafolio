import React, { useContext } from 'react'
import Sections from '../components/sections'



const section2 = () => {

	var flag = 0
	React.useEffect(() => {
		const node = document.querySelector('.container-section3')
		const line = document.querySelector('.line4')
		const observer = new IntersectionObserver((objeto) => {
			objeto.forEach(entry => {
				if (entry.isIntersecting) {
					const body = document.querySelector('body')
					body.style.overflow = 'hidden'
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
	const title = 'Get In Touch'
	const p = 'kuon609@gmail.com Wantedly'
	const url = 'portafolio3'
	const arb = 'SOY YO, pero hay que convertirme en children'
	return (
		<React.Fragment>
			<Sections
				img={img}
				url={url}
				title={title}
				p={p}
				id={3}
				arb={arb}
			/>

		</React.Fragment>
	)
}

export default section2