import { useState } from "react";

const useInitialState = () => {
	const [state, setState] = useState(false)

	function arbi(id) {
		console.log('acaso que llego' + id)
		const hover = document.getElementById(`card-${id}`)
		const img = document.querySelector(`#imgId-${id}`)
		const github = document.querySelector(`.icongit-${id}`)
		hover.addEventListener('mouseover', () => {
			img.classList.add('hover')
			github.style.visibility = 'visible'
		})
	}
	return (
			{
				arbi,
				state,
				setState,
			}
		)
	}

	export default useInitialState