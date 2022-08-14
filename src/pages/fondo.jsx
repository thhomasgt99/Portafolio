import React from 'react'



function fondo() {

	React.useEffect(() => {

		const elems = document.querySelectorAll('.laya-please');
		const layer2 = document.querySelector('.layer-2');
		const layer3 = document.querySelector('.layer-3');
		const layer4 = document.querySelector('.layer-4');
		const layer5 = document.querySelector('.layer-5');
		const layer6 = document.querySelector('.layer-6');
		const layer7 = document.querySelector('.layer-7');
		const layer8 = document.querySelector('.layer-8');

		document.body.addEventListener('mousemove', function (e) {
			let width = window.innerWidth / 2; //inerwidth es el ancho de la pantalla

			let mouseMoved2 = ((width - e.pageX) / 50); //pageX da el valor en x de el cursor econ despecto al ancho de la pantalla
			let mouseMoved3 = ((width - e.pageX) / 40);
			let mouseMoved4 = ((width - e.pageX) / 30);
			let mouseMoved5 = ((width - e.pageX) / 20);
			let mouseMoved6 = ((width - e.pageX) / 10);
			let mouseMoved7 = ((width - e.pageX) / 5);

			layer3.style.transform = "translateX(" + mouseMoved2 + "px)";
			layer4.style.transform = "translateX(" + mouseMoved3 + "px)";
			layer5.style.transform = "translateX(" + mouseMoved4 + "px)";
			layer6.style.transform = "translateX(" + mouseMoved5 + "px)";
			layer7.style.transform = "translateX(" + mouseMoved6 + "px)";
			layer8.style.transform = "translateX(" + mouseMoved7 + "px)";
		});

	}, [])

	return (
		<div class="totalcontainer">
			<div class="laya-please layer-1"></div>
			<div class="laya-please layer-2"></div>

			<div class="container1">
				<div class="laya-please layer-3"></div>
				<div class="laya-please layer-4"></div>
				<div class="laya-please layer-5"></div>
				<div class="laya-please layer-6"></div>
			</div>

			<div class="container2">
				<div class="laya-please layer-7"></div>
				<div class="laya-please layer-8"></div>
			</div>
		</div>
	)
}

export default fondo