import React, { useContext } from 'react'

function Card({ id, img, title, description, url, github }) {

	return (
		<a cursor='pointer' href={url} target="_blank">
			<div className="card" id={`card-${id}`}>
				<img id={`imgId-${id}`} src={img} alt="" />
				<div className="card-container">
					<div className="card-line">
					</div>
					<h2 className="card-title">{title}</h2>
					<p className="card-text">{description}</p>
				</div>
				<a href={github} target="_blank"><i className={`fa-brands fa-github iconsgit icongit-${id}`}></i></a>
				
			</div>
		</a>
		
	)
}

export default Card