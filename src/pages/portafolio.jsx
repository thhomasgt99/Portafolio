import React from 'react'
import Section1 from '../containers/section1'
import Card from '../components/card'
import api from '../api'
import '../styles/portafolio.scss'

function Portafolio() {
	return (
		<React.Fragment>
			<div className='portafolio'>
				<Section1 />
				<div className='portafolio-grid'>
					<div className='portafolio-container'>
						{
							api.map(item => (
								<Card url={item.url} img={item.img} title={item.title} description={item.description} key={item.title}/>
							))
						}
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}

export default Portafolio