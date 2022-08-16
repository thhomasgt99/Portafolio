import React from 'react'

const Menu = () => {
	const close = ()=>{
		window.addEventListener('click',()=>{
			const menuClick = document.querySelector('#menu')
			menuClick.style.display = 'none'
		})
	}
	const portafolio = ()=>{
		window.scrollTo({
			top: 1050,
			left: 0,
			behavior: 'smooth'
		});
		close()
	}
	const home = ()=>{
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
		});
		close()
	}
	const about = ()=>{
		window.scrollTo({
			top: 2100,
			left: 0,
			behavior: 'smooth'
		});
		close()
	}
	const contacto = ()=>{
		window.scrollTo({
			top: 4000,
			left: 0,
			behavior: 'smooth'
		});
		close()
	}
	return (
		<nav id='menu'>
			<ul>
				<i class="fa-solid fa-xmark" onClick={close}></i>
				<li onClick={home}>Home</li>
				<li onClick={portafolio}>Portafolio</li>
				<li onClick={about}>Sobre mi</li>
				<li onClick={contacto}>Contacto</li>
			</ul>
		</nav>

	)
}

export default Menu