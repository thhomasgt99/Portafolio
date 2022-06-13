import React from 'react'
import Sections from '../components/sections'

const img = 'https://kuon.space/assets/img/reile.jpg'
const title = 'Hair Space REILE'
const p = 'website'
const url = 'portaforce'

const section1 = () => {
	return (
		<Sections
			img={img}
			url={url}
			title={title}
			p={p}
		/>
	)
}

export default section1