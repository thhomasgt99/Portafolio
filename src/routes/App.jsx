import React from 'react'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import Home from '../pages/home'
import Portafolio from '../pages/portafolio'
import NotFoud from '../pages/NotFoud'

import '../styles/styles.scss'

const App = () => {
	return (
		<React.Fragment>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/portaforce' element={<Portafolio />} />
					<Route path='*' element={<NotFoud />} />
				</Routes>
			</BrowserRouter>
		</React.Fragment>
	)
}

export default App

