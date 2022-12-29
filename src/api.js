//por una extraña razon en jsx no se puede traer images de local con solo la ruta hay que importar  por eso estas importaciones
import batata from './images/batata.jpg' 
import gafas from './images/gafas.jpg'
import cienifico from './images/100tifico.jpg'
import task from './images/task.jpg'
import pokedex from './images/pokedex.jpg'
import weather from './images/weather-app.jpg'
import shoes from './images/shoes-merch.jpg'
import TasksAppReact from './images/task-react.jpg'
// const batata = 'https://thhomasgt99.github.io/assets/img/batata.png'
// const gafas  = 'https://thhomasgt99.github.io/assets/img/batata.png'

const api =[
	{
		title: 'PlatziConf Merch✔',
		description: 'Platzi-Conf-Merch es una e-commerce donde puedes vender tus productos. Contiene integración de pagos con Paypal y un diseño responsivo.',
		img:shoes,
		url: 'https://thomb.xyz/',
		id:1,
		github:'https://github.com/thhomasgt99/platzi-Conf-Merch'
	},
	{
		title: 'BatataBit✔',
		description: 'Batatabit es un layout sencillo, atractivo y con un diseño responsivo.',
		img: batata,
		url: 'https://thhomasgt99.github.io/Batatabit/index.html',
		id:2,
		github:'https://github.com/thhomasgt99/Batatabit/tree/master'
	},
	{
		title: 'Glasses Shop✔',
		description: 'Glasses Shop es un layout para una tienda virtual. Contiene un slider horizontal hecho con JavaScript vanilla para presentar algunas imágenes de los productos.',
		img: gafas,
		url: 'https://thhomasgt99.github.io/pagina-gafass/',
		id:3,
		github:'https://github.com/thhomasgt99/pagina-gafass'
	},
	{
		title: 'Weather-app✔',
		description: 'Weather-app es una single-page-aplication que muestra el clima de tu ubicación.',
		img: weather,
		url: 'https://thhomasgt99.github.io/weather-app/',
		id:6,
		github:'https://github.com/thhomasgt99/weather-app'
	},
	{
		title: 'Tasks-app-react✔',
		description: 'Tasks-app-react es un aplicación para crear y administrar tus tareas diarias de una forma fácil y rápida. La persistencia de datos depende de Localstorage, y está construida con react.',
		img: TasksAppReact,
		url: 'https://thhomasgt99.github.io/react-tasks-app/',
		id:4,
		github:'https://github.com/thhomasgt99/react-tasks-app'
	},
	{
		title: 'Tasks-app✔',
		description: 'Tasks-app es un aplicación para crear y administrar tus tareas diarias de una forma fácil y rápida. La persistencia de datos depende de Localstorage.',
		img: task,
		url: 'https://thhomasgt99.github.io/Tasks-app/',
		id:4,
		github:'https://github.com/thhomasgt99/Tasks-app'
	},
	{
		title: 'Pokedex✔',
		description: 'Pokedex es una single-page-aplication que consume una API de pokemones para presentarlos junto con los atributos y características de cada personaje.',
		img: pokedex,
		url: 'https://thhomasgt99.github.io/Pokedex/',
		id:5,
		github:'https://github.com/thhomasgt99/Pokedex'
	},
	// {
	// 	title: 'Movies',
	// 	description: 'Clon de la popular web de peliculas Cuevana',
	// 	img: pokedex,
	// 	url: 'https://movies-bfeec.web.app/',
	// 	id:8,
	// 	github:'https://github.com/thhomasgt99/movies'
	// },
	{
		title: '100tifico✔',
		description: '100tifico es una single-page-aplication que renderiza desde una API los personajes de la popular serie Rick and Morty, además de mostrarnos algo de información relevante.',
		img: cienifico,
		url: 'https://thhomasgt99.github.io/100tifico/',
		id:7,
		github:'https://github.com/thhomasgt99/100tifico/tree/master'
	},
	// {
	// 	title: 'Yard-Sale❗',
	// 	description: 'Yard-Sale es una e-commerce con las funcionalidades base tipicas de una tienda virtual.',
	// 	img:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAhQAAAIUB4uz/wQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAF1SURBVEiJvdS/SsNQFMfx37kJQts0tZNW2yrFSQUfwZdwE92Ki4PgUwi6CdpNB3HwERwExw6CYAdpS6HRki7a9J/GmlwXFTX9c2pD75ZDzvez3ARgnmTV2kiY1qOSvX3XcoVj7p7gvBQ3a2kpcQpgxnEcpVmvbwXv8he+AHGzliZQBgD9nLcbjTUO0hfoFR8G6QkMinORrgA3zkE8wLDxQcgv4L/xfsg3MGq8FyL8jHdDKFm1NqXECTdulIpsSNP1DCVMqwIgxl0aBlAUxWH9KkY5AsAuANvvMBEhEAodCmM6ck62jEHKfb/iAS2U1QPRVHNpYUcAQHlu8pmIDL8AIlG2VuZLAKAyd1wQjsiVRjAcXnUdJ/Habi9zFlmABK4epiLbn497ADBxk3t6s+3ooF3WLSLIhnfGuxhjuabjAVzIF7+i5FLLCzjiGkBn5DgIUMWZB6jM6vck5TqAgmeJkP87E0L1fDeqqnY0PXzQWkxdfs0+AJRxp6EJFsUfAAAAAElFTkSuQmCC',
	// 	url: 'https://thhomasgt99.github.io/YARD-SALE/',
	// 	id:8,
	// 	github:'/'
	// },
	// {
	// 	title: 'Notes-app fatz curd❌',
	// 	description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptatem, saepe necessitatibus consequuntur dicta repudiandae.',
	// 	img:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAhQAAAIUB4uz/wQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAF1SURBVEiJvdS/SsNQFMfx37kJQts0tZNW2yrFSQUfwZdwE92Ki4PgUwi6CdpNB3HwERwExw6CYAdpS6HRki7a9J/GmlwXFTX9c2pD75ZDzvez3ARgnmTV2kiY1qOSvX3XcoVj7p7gvBQ3a2kpcQpgxnEcpVmvbwXv8he+AHGzliZQBgD9nLcbjTUO0hfoFR8G6QkMinORrgA3zkE8wLDxQcgv4L/xfsg3MGq8FyL8jHdDKFm1NqXECTdulIpsSNP1DCVMqwIgxl0aBlAUxWH9KkY5AsAuANvvMBEhEAodCmM6ck62jEHKfb/iAS2U1QPRVHNpYUcAQHlu8pmIDL8AIlG2VuZLAKAyd1wQjsiVRjAcXnUdJ/Habi9zFlmABK4epiLbn497ADBxk3t6s+3ooF3WLSLIhnfGuxhjuabjAVzIF7+i5FLLCzjiGkBn5DgIUMWZB6jM6vck5TqAgmeJkP87E0L1fDeqqnY0PXzQWkxdfs0+AJRxp6EJFsUfAAAAAElFTkSuQmCC',
	// 	url: 'https://thomb.xyz/',
	// 	id:9,
	// 	github:'/'
	// },
	// {
	// 	title: 'Photo gallery fatz crud❌',
	// 	description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptatem, saepe necessitatibus consequuntur dicta repudiandae.',
	// 	img:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAhQAAAIUB4uz/wQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAF1SURBVEiJvdS/SsNQFMfx37kJQts0tZNW2yrFSQUfwZdwE92Ki4PgUwi6CdpNB3HwERwExw6CYAdpS6HRki7a9J/GmlwXFTX9c2pD75ZDzvez3ARgnmTV2kiY1qOSvX3XcoVj7p7gvBQ3a2kpcQpgxnEcpVmvbwXv8he+AHGzliZQBgD9nLcbjTUO0hfoFR8G6QkMinORrgA3zkE8wLDxQcgv4L/xfsg3MGq8FyL8jHdDKFm1NqXECTdulIpsSNP1DCVMqwIgxl0aBlAUxWH9KkY5AsAuANvvMBEhEAodCmM6ck62jEHKfb/iAS2U1QPRVHNpYUcAQHlu8pmIDL8AIlG2VuZLAKAyd1wQjsiVRjAcXnUdJ/Habi9zFlmABK4epiLbn497ADBxk3t6s+3ooF3WLSLIhnfGuxhjuabjAVzIF7+i5FLLCzjiGkBn5DgIUMWZB6jM6vck5TqAgmeJkP87E0L1fDeqqnY0PXzQWkxdfs0+AJRxp6EJFsUfAAAAAElFTkSuQmCC',
	// 	url: 'https://thomb.xyz/',
	// 	id:10,
	// 	github:'/'
	// }
]
export  default api