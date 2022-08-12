import React from 'react'

const Sections = ({id, img, title, p, url, numero, children}) => {

	return (
		<React.Fragment>
			<section id={`section${id}`} className={`section${id}  section-general`}>
				<img className="section-image" src={img} alt="" />
				<div className={`container-section${id} container-section`}>
					<h1 className="title">{title}</h1>
					<div className="line-container">
						<div className="line-red"></div>
						<div className="line-red"></div>
					</div>
					<p className="description">{p}</p>
					{children}
					<button className="section-button"><a href={`/${url}`}>show me more</a></button>
				</div>
				<h3 className="section-number">{numero}</h3>
			</section>
		</React.Fragment>
	)
}

export default Sections
