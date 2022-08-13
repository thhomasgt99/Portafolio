import React from 'react'

const Menu = () => {
	React.useEffect(() => {
		const X = document.querySelector('.fa-xmark')
		X.addEventListener('click', () => {
			const menuClick = document.querySelector('#menu')
			menuClick.style.display = 'none'
		})
	}, [])
	return (
		<nav id='menu'>
			<ul>
				<i class="fa-solid fa-xmark"></i>
				<li>Home</li>
				<li>Portafolio</li>
				<li>Sobre mi</li>
				<li>Contacto</li>
			</ul>
		</nav>

	)
}

export default Menu