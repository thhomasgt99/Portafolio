//por una extraña razon en jsx no se puede traer images de local con solo la ruta hay que importar  por eso estas importaciones
import batata from './images/batata.jpg' 
import gafas from './images/gafas.jpg'
import cienifico from './images/100tifico.jpg'
import task from './images/task.jpg'
import pokedex from './images/pokedex.jpg'
import weather from './images/weather-app.jpg'
import shoes from './images/shoes-merch.jpg'
import store from './images/store.jpg'
import TasksAppReact from './images/task-react.jpg'
import builder from './images/builder.png'
import biocunboya from './images/biocunboya.png'
// const batata = 'https://thhomasgt99.github.io/assets/img/batata.png'
// const gafas  = 'https://thhomasgt99.github.io/assets/img/batata.png'

const api =[
	{
		title: 'Site Builder✔',
		description: 'Site Builder te permite crear sitios web estáticos de forma rápida y sencilla, ideal para quienes buscan una solución eficiente sin complicaciones. Con una interfaz intuitiva y fácil de usar, podrás personalizar cada detalle de tu sitio, desde los colores y tipografías hasta la disposición del contenido.',
		img:builder,
		url: 'http://builder.wuaze.com/',
		id:1,
		github:'https://github.com/thhomasgt99/builder'
	},
	{
		title: 'Store✔',
		description: 'Store es una tienda en línea moderna y funcional, diseñada y desarrollada utilizando PHP orientado a objetos, lo que garantiza un código modular y fácil de mantener.',
		img:store,
		url: 'http://tiendavirtual.lovestoblog.com/',
		id:2,
		github:'https://github.com/thhomasgt99/store'
	},
	{
		title: 'BioCunBoya✔',
		description: 'BioCunBoya sitio web es un espacio dedicado a la riqueza natural de Cundinamarca y Boyacá. Aquí encontrarás información detallada sobre la fauna de la región en especial de mariposas y aves.',
		img: biocunboya,
		url: 'https://biocunboya.github.io/',
		id:3,
		github:'https://github.com/biocunboya/biocunboya.github.io'
	},
	{
		title: 'BatataBit✔',
		description: 'Batatabit es un layout sencillo, atractivo y con un diseño responsivo.',
		img: batata,
		url: 'https://thhomasgt99.github.io/Batatabit/index.html',
		id:4,
		github:'https://github.com/thhomasgt99/Batatabit/tree/master'
	},
	{
		title: 'Glasses Shop✔',
		description: 'Glasses Shop es un layout para una tienda virtual. Contiene un slider horizontal heczho con JavaScript vanilla para presentar algunas imágenes de los productos.',
		img: gafas,
		url: 'https://thhomasgt99.github.io/pagina-gafass/',
		id:5,
		github:'https://github.com/thhomasgt99/pagina-gafass'
	},
]
export  default api