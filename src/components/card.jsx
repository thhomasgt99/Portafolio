import React from 'react'
//esto de las imgenes importadas de esta madera me deja con otro problema se deve configurar el webpack para poder tratar imagenes en build 'dist'

function Card({ img, title, description, url }) {
	return (
		<a cursor='pointer' href={url}>
			<div className="card">
				<img src={img} alt="" />
				<div className="card-container">
					<div className="card-line"></div>
					<h2 className="card-title">{title}</h2>
					<p className="card-text">{description}</p>
				</div>
			</div>
		</a>

	)
}

export default Card