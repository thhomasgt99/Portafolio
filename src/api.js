//por una extraña razon en jsx no se puede traer images de local con solo la ruta hay que importar  por eso estas importaciones
import batata from './images/batata.jpg' 
import gafas from './images/gafas.jpg'
// const batata = 'https://thhomasgt99.github.io/assets/img/batata.png'
// const gafas  = 'https://thhomasgt99.github.io/assets/img/batata.png'

const api =[
	{
		title: 'BatataBit✔',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptatem, saepe necessitatibus consequuntur dicta repudiandae.',
		img: batata,
		url: 'https://thhomasgt99.github.io/Batatabit/index.html',
		id:1
	},
	{
		title: 'Glasses Shop✔',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptatem, saepe necessitatibus consequuntur dicta repudiandae.',
		img: gafas,
		url: 'https://thhomasgt99.github.io/pagina-gafass/',
		id:2
	},
	{
		title: 'Yard-Sale❗',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptatem, saepe necessitatibus consequuntur dicta repudiandae.',
		img:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAhQAAAIUB4uz/wQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAF1SURBVEiJvdS/SsNQFMfx37kJQts0tZNW2yrFSQUfwZdwE92Ki4PgUwi6CdpNB3HwERwExw6CYAdpS6HRki7a9J/GmlwXFTX9c2pD75ZDzvez3ARgnmTV2kiY1qOSvX3XcoVj7p7gvBQ3a2kpcQpgxnEcpVmvbwXv8he+AHGzliZQBgD9nLcbjTUO0hfoFR8G6QkMinORrgA3zkE8wLDxQcgv4L/xfsg3MGq8FyL8jHdDKFm1NqXECTdulIpsSNP1DCVMqwIgxl0aBlAUxWH9KkY5AsAuANvvMBEhEAodCmM6ck62jEHKfb/iAS2U1QPRVHNpYUcAQHlu8pmIDL8AIlG2VuZLAKAyd1wQjsiVRjAcXnUdJ/Habi9zFlmABK4epiLbn497ADBxk3t6s+3ooF3WLSLIhnfGuxhjuabjAVzIF7+i5FLLCzjiGkBn5DgIUMWZB6jM6vck5TqAgmeJkP87E0L1fDeqqnY0PXzQWkxdfs0+AJRxp6EJFsUfAAAAAElFTkSuQmCC',
		url: 'https://thhomasgt99.github.io/YARD-SALE/',
		id:3
	},
	{
		title: '100tifico✔',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptatem, saepe necessitatibus consequuntur dicta repudiandae.',
		img:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAhQAAAIUB4uz/wQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAF1SURBVEiJvdS/SsNQFMfx37kJQts0tZNW2yrFSQUfwZdwE92Ki4PgUwi6CdpNB3HwERwExw6CYAdpS6HRki7a9J/GmlwXFTX9c2pD75ZDzvez3ARgnmTV2kiY1qOSvX3XcoVj7p7gvBQ3a2kpcQpgxnEcpVmvbwXv8he+AHGzliZQBgD9nLcbjTUO0hfoFR8G6QkMinORrgA3zkE8wLDxQcgv4L/xfsg3MGq8FyL8jHdDKFm1NqXECTdulIpsSNP1DCVMqwIgxl0aBlAUxWH9KkY5AsAuANvvMBEhEAodCmM6ck62jEHKfb/iAS2U1QPRVHNpYUcAQHlu8pmIDL8AIlG2VuZLAKAyd1wQjsiVRjAcXnUdJ/Habi9zFlmABK4epiLbn497ADBxk3t6s+3ooF3WLSLIhnfGuxhjuabjAVzIF7+i5FLLCzjiGkBn5DgIUMWZB6jM6vck5TqAgmeJkP87E0L1fDeqqnY0PXzQWkxdfs0+AJRxp6EJFsUfAAAAAElFTkSuQmCC',
		url: 'https://thhomasgt99.github.io/100tifico/',
		id:4
	},
	{
		title: 'Tasks-app✔',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptatem, saepe necessitatibus consequuntur dicta repudiandae.',
		img:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAhQAAAIUB4uz/wQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAF1SURBVEiJvdS/SsNQFMfx37kJQts0tZNW2yrFSQUfwZdwE92Ki4PgUwi6CdpNB3HwERwExw6CYAdpS6HRki7a9J/GmlwXFTX9c2pD75ZDzvez3ARgnmTV2kiY1qOSvX3XcoVj7p7gvBQ3a2kpcQpgxnEcpVmvbwXv8he+AHGzliZQBgD9nLcbjTUO0hfoFR8G6QkMinORrgA3zkE8wLDxQcgv4L/xfsg3MGq8FyL8jHdDKFm1NqXECTdulIpsSNP1DCVMqwIgxl0aBlAUxWH9KkY5AsAuANvvMBEhEAodCmM6ck62jEHKfb/iAS2U1QPRVHNpYUcAQHlu8pmIDL8AIlG2VuZLAKAyd1wQjsiVRjAcXnUdJ/Habi9zFlmABK4epiLbn497ADBxk3t6s+3ooF3WLSLIhnfGuxhjuabjAVzIF7+i5FLLCzjiGkBn5DgIUMWZB6jM6vck5TqAgmeJkP87E0L1fDeqqnY0PXzQWkxdfs0+AJRxp6EJFsUfAAAAAElFTkSuQmCC',
		url: 'https://thhomasgt99.github.io/Tasks-app/',
		id:5
	},
	{
		title: 'PlatziConf Merch✔',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptatem, saepe necessitatibus consequuntur dicta repudiandae.',
		img:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAhQAAAIUB4uz/wQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAF1SURBVEiJvdS/SsNQFMfx37kJQts0tZNW2yrFSQUfwZdwE92Ki4PgUwi6CdpNB3HwERwExw6CYAdpS6HRki7a9J/GmlwXFTX9c2pD75ZDzvez3ARgnmTV2kiY1qOSvX3XcoVj7p7gvBQ3a2kpcQpgxnEcpVmvbwXv8he+AHGzliZQBgD9nLcbjTUO0hfoFR8G6QkMinORrgA3zkE8wLDxQcgv4L/xfsg3MGq8FyL8jHdDKFm1NqXECTdulIpsSNP1DCVMqwIgxl0aBlAUxWH9KkY5AsAuANvvMBEhEAodCmM6ck62jEHKfb/iAS2U1QPRVHNpYUcAQHlu8pmIDL8AIlG2VuZLAKAyd1wQjsiVRjAcXnUdJ/Habi9zFlmABK4epiLbn497ADBxk3t6s+3ooF3WLSLIhnfGuxhjuabjAVzIF7+i5FLLCzjiGkBn5DgIUMWZB6jM6vck5TqAgmeJkP87E0L1fDeqqnY0PXzQWkxdfs0+AJRxp6EJFsUfAAAAAElFTkSuQmCC',
		url: 'https://thomb.xyz/',
		id:6
	},
	{
		title: 'Notes-app fatz curd❌',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptatem, saepe necessitatibus consequuntur dicta repudiandae.',
		img:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAhQAAAIUB4uz/wQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAF1SURBVEiJvdS/SsNQFMfx37kJQts0tZNW2yrFSQUfwZdwE92Ki4PgUwi6CdpNB3HwERwExw6CYAdpS6HRki7a9J/GmlwXFTX9c2pD75ZDzvez3ARgnmTV2kiY1qOSvX3XcoVj7p7gvBQ3a2kpcQpgxnEcpVmvbwXv8he+AHGzliZQBgD9nLcbjTUO0hfoFR8G6QkMinORrgA3zkE8wLDxQcgv4L/xfsg3MGq8FyL8jHdDKFm1NqXECTdulIpsSNP1DCVMqwIgxl0aBlAUxWH9KkY5AsAuANvvMBEhEAodCmM6ck62jEHKfb/iAS2U1QPRVHNpYUcAQHlu8pmIDL8AIlG2VuZLAKAyd1wQjsiVRjAcXnUdJ/Habi9zFlmABK4epiLbn497ADBxk3t6s+3ooF3WLSLIhnfGuxhjuabjAVzIF7+i5FLLCzjiGkBn5DgIUMWZB6jM6vck5TqAgmeJkP87E0L1fDeqqnY0PXzQWkxdfs0+AJRxp6EJFsUfAAAAAElFTkSuQmCC',
		url: 'https://thomb.xyz/',
		id:7
	},
	{
		title: 'Photo gallery fatz crud❌',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptatem, saepe necessitatibus consequuntur dicta repudiandae.',
		img:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAhQAAAIUB4uz/wQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAF1SURBVEiJvdS/SsNQFMfx37kJQts0tZNW2yrFSQUfwZdwE92Ki4PgUwi6CdpNB3HwERwExw6CYAdpS6HRki7a9J/GmlwXFTX9c2pD75ZDzvez3ARgnmTV2kiY1qOSvX3XcoVj7p7gvBQ3a2kpcQpgxnEcpVmvbwXv8he+AHGzliZQBgD9nLcbjTUO0hfoFR8G6QkMinORrgA3zkE8wLDxQcgv4L/xfsg3MGq8FyL8jHdDKFm1NqXECTdulIpsSNP1DCVMqwIgxl0aBlAUxWH9KkY5AsAuANvvMBEhEAodCmM6ck62jEHKfb/iAS2U1QPRVHNpYUcAQHlu8pmIDL8AIlG2VuZLAKAyd1wQjsiVRjAcXnUdJ/Habi9zFlmABK4epiLbn497ADBxk3t6s+3ooF3WLSLIhnfGuxhjuabjAVzIF7+i5FLLCzjiGkBn5DgIUMWZB6jM6vck5TqAgmeJkP87E0L1fDeqqnY0PXzQWkxdfs0+AJRxp6EJFsUfAAAAAElFTkSuQmCC',
		url: 'https://thomb.xyz/',
		id:8
	}
]
export  default api