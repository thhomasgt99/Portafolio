import React from 'react'
import Sections from '../components/sections'

const img = 'https://kuon.space/assets/img/reile.jpg'
const title = 'Get In Touch'
const p = 'kuon609@gmail.com Wantedly'
const url = 'portafolio3'
const arb = 'SOY YO, pero hay que convertirme en children'

const section2 = () => {
	return (
		<React.Fragment>
			<Sections
				img={img}
				url={url}
				title={title}
				p={p}
				arb={arb}
			/>

		</React.Fragment>
	)
}

export default section2