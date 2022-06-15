import React, { useContext } from 'react'

function Card({ id, img, title, description, url }) {

	return (
		<a cursor='pointer' href={url}>
			<div className="card" id={`card-${id}`}>
				<img src={img} alt="" />
				<div className="card-container">
					<div className="card-line">
					</div>
					<h2 className="card-title">{title}</h2>
					<p className="card-text">{description}</p>
				</div>
			</div>
		</a>
		
	)
}

export default Card