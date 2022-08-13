import React, {Fragment}from 'react'
import Section2 from '../containers/section2'

const About = ()=>{
	React.useEffect(()=>{
		const path =  window.location.pathname
		if(path === '/about'){
			const regreso = document.querySelector('.section-button')
			regreso.style.display = 'none'
		}
	},[])
	return(
		<Fragment>
			<a href="/"><i class="fa-solid fa-angles-left"></i></a>
			<Section2 />
		</Fragment>
	)
}

export default About