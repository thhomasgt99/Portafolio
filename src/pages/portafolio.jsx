import React, { useContext } from 'react'
import AppContext from '../context/AppContext'
import Section1 from '../containers/section1'
import Card from '../components/card'
import api from '../api'
import '../styles/portafolio.scss'

function Portafolio() {
	const { state, setState } = useContext(AppContext)
	
	React.useEffect(() => {
		if (state === false) { //el evento queda prendido deveria arreglarlo, ponerle un conlole para comprobar
			const hover1 = document.getElementById('card-1')
			hover1.addEventListener('mouseover',() => { hover1.style.background = "red"})
			const hover2 = document.getElementById('card-2')
			hover2.addEventListener('mouseover',() => { hover2.style.background = "red"})
			const hover3 = document.getElementById('card-3')
			hover3.addEventListener('mouseover',() => { hover3.style.background = "red"})
			const hover4 = document.getElementById('card-4')
			hover4.addEventListener('mouseover',() => { hover4.style.background = "red"})
			const hover5 = document.getElementById('card-5')
			hover5.addEventListener('mouseover',() => { hover5.style.background = "red"})
			const hover6 = document.getElementById('card-6')
			hover6.addEventListener('mouseover',() => { hover6.style.background = "red"})
			const hover7 = document.getElementById('card-7')
			hover7.addEventListener('mouseover',() => { hover7.style.background = "red"})
			const hover8 = document.getElementById('card-8')
			hover8.addEventListener('mouseover',() => { hover8.style.background = "red"})

			setState(!state)

		} else {
			console.log(state)
		}
	}, [state])


	return (
		<React.Fragment>
			<div className='portafolio'>
				<Section1 />
				<div className='portafolio-grid'>
					<div className='portafolio-container'>
						{
							api.map(item => (
								<Card id={item.id} url={item.url} img={item.img} title={item.title} description={item.description} key={item.title} />
							))
						}
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}

export default Portafolio