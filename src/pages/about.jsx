import React, { Fragment } from 'react'
import Section2 from '../containers/section2'
import git from '../images/git.png'
import github from '../images/gitHub.png'
import css from '../images/css3.png'
import html from '../images/html.png'
import express from '../images/express.png'
import js from '../images/JavaScript.png'
import node from '../images/node.png'
import sass from '../images/sass.png'
import reactjs from '../images/react.png'

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
							<li><img src={css} alt=""/><p>css</p></li>
							<li><img src={html} alt=""/><p>html</p></li>
							<li><img src={js} alt=""/><p>javaScript</p></li>
							<li><img src={sass} alt=""/><p>sass</p></li>
							<li><img src={git} alt=""/><p>git</p></li>
							<li><img src={github} alt=""/><p>gitHub</p></li>
							<li><img src={reactjs} alt=""/><p>react</p></li>
							<li><img src={node} alt=""/><p>nodeJS</p></li>
							<li><img src={express} alt=""/><p>express</p></li>
							
						</ul>
					</div>
				</section>
			</div>
		</React.Fragment>
	)
}

export default About