import React, { Fragment } from 'react'
import Section2 from '../containers/section2'

const About = () => {
	React.useEffect(() => {
		const path = window.location.pathname
		if (path === '/about') {
			const regreso = document.querySelector('.section-button')
			regreso.style.display = 'none'
		}
	}, [])
	return (
		<React.Fragment>
			<div className='about'>
				<a href="/"><i class="fa-solid fa-angles-left"></i></a>
				<Section2 />
				<section className='about-container'>
					<div className='about-me'>
						<div className='title'>
							Quién soy?
							<hr />
						</div>
						<div className='descripcion'>
							¡Hola! Mi nombre es Thomas y disfruto creando cosas que viven en Internet.
							Soy un desarrollador de Colombia interesado principalmente en tecnologías
							web, especialmente en desarrollo frontend.
							Mi curiosidad me permite aprender rápidamente nuevas herramientas y tecnologías cuando es necesario.
							Tengo una gran pasión por los efectos de interfaz de usuario, las animaciones y la creación de experiencias
							de usuario intuitivas y dinámicas.
							Aficionado a la ilustración y el modelado 3D.
						</div>
					</div>
					<h4>
						Tecnologías y Habilidades
					</h4>
					<div>
						<ul>
							<li>html</li>
							<li>css</li>
							<li>js</li>
							<li>react</li>
							<li>sass</li>
							<li>webpack</li>
							<li>node</li>
							<li>git</li>
							<li>npm</li>
						</ul>
					</div>
				</section>
			</div>
		</React.Fragment>
	)
}

export default About