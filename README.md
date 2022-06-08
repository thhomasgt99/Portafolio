# RETO
---
## Scrips 
- npm run start  -> Arranca el proyecto en desarrollo
- npm run build  -> Crea el compilado de produccion
##### Nota: si no funciona el build agragar las rutas al html manualmente. Puede ser por los puntos de las rutas
## Dependencias de desarrollo 
- react            	 			-> Instala react
- react-dom        	 			-> Instala react dom
- react-dom/client        -> Ahora este remplaza a react-dom
- react-router-dom        -> Dependencia para manejo de rutas en la aplicacion
- webpack									-> wepack
- webpack-cli        			-> 
- webpack-dev-server 			-> Servidor de desarrollo
- html-webpack-plugin			-> Para poder manipular el html desde webpack, modificarlo y moverlo a dist
- html-loader				 			-> Loader de html para que trate webpack estos formatos
- babel-loader       			-> Para poder trabajar babel con webpack
- @babel/preset-env  		 	-> Compila las versiones ecma6 de para adelante alparecer
- @babel/preset-react		 	-> Compila	jsx y sintax de react
- @babel/core        		 	-> Todo el core de babel
- css-loader         		 	-> Loader de css para que trate webpack estos formatos
- mini-css-extract-plugin	-> Minificador de css 
- sass               		 	-> sass
- sass-loader        		 	-> Loader de sass para que trate webpack estos formatos
- axios                   -> Para manejar mejor las llamadas apis
- copy-webpack-plugin     -> Nos ayudará a copiar los archivos de la carpeta /public a la carpeta de nuestro proyecto compilado