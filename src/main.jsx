import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Contact from './Pages/Contact'

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Routes>
			<Route index element={<Home />} />
			<Route path="/contact" element={<Contact />} />
		</Routes>
	</BrowserRouter>
)
