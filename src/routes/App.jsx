import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppContext from '../context/AppContext'
import useInitialState from '../hooks/useInitialState'
import Home from '../pages/home'
import Portafolio from '../pages/portafolio'
import NotFoud from '../pages/NotFoud'
import Menu from '../containers/menu'
import About from '../pages/about'

import '../styles/styles.scss'

const App = () => {
	const initialState = useInitialState()
	return (
		<AppContext.Provider value={initialState}>
			<React.Fragment>
				<BrowserRouter>
					<Menu />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/portafolio' element={<Portafolio />} />
						<Route path='/about' element={<About/>} />
						<Route path='*' element={<NotFoud />} />
					</Routes>
				</BrowserRouter>
			</React.Fragment>
		</AppContext.Provider>
	)
}

export default App

