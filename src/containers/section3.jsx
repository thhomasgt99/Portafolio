import React, { useContext } from 'react'
import Sections from '../components/sections'



const section2 = () => {
	React.useEffect(() => {
		const node = document.querySelector('.container-section3')
		const line = document.querySelector('.line4')
		line.style.background = '#FF4D5A'
		node.classList.add('slide')
	}, [])

	const img = 'https://kuon.space/assets/img/reile.jpg'
	const title = 'Ponerse en contacto'
	const p = 'thhomasgt99@gmail.com'
	const url = 'portafolio3'
	const numero = '03'
	return (
		<React.Fragment>
			<Sections
				img={img}
				url={url}
				title={title}
				p={p}
				id={3}
				numero={numero}
			>
				<div>
					<a target="_blank" href="https://www.linkedin.com/in/thomas-bernal-morales-863733228/"><i class="fa-brands fa-linkedin"></i></a>
					<a target="_blank" href="https://github.com/thhomasgt99"><i class="fa-brands fa-github"></i></a>
					<hr />
				</div>
			</Sections>


		</React.Fragment>
	)
}

export default section2