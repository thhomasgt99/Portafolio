import { useState } from "react";

const useInitialState = () => {
	const [state, setState] = useState(false)

	function slide (container) {
	const node = document.querySelector(container)
		let options = { //options para ser mas especifico el observer, no son obligatorias pero si utiles
			threshold: 0.75
			// root: document.querySelector('#scrollArea'),
			// rootMargin: '0px',
		}
		const observer = new IntersectionObserver((objeto) => {
			objeto.forEach(entry => {
				if (entry.isIntersecting) {
					node.classList.add('slide')
				}
			})
		}, options)
		observer.observe(node)
	}

return (
	{	
		slide,
		state,
		setState,
	}
)
}

export default useInitialState