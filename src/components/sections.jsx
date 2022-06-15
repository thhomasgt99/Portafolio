import React from 'react'

const Sections = (props) => {

	return (
		<React.Fragment>
			<section id='section1' className="section1  section-general">
				<img className="section-image" src={props.img} alt="" />
				<div className='container-section'>
					<h1 className="title">{props.title}</h1>
					<div className="line-container">
						<div className="line-red"></div>
						<div className="line-red"></div>
					</div>
					<p className="description">{props.p}</p>
					<h1>{props.arb}</h1>
					<button className="section-button"><a href={`/${props.url}`}>show me more</a></button>
				</div>
				<h3 className="section-number">01</h3>
			</section>
		</React.Fragment>
	)
}

export default Sections
