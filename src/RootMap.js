import { Route, BrowserRouter, Routes } from "react-router-dom";

import App from './App'
import Imgs from './Images_section/index'

const RootMap = () => {
	return(
		<BrowserRouter>
		<Routes>
			<Route element = { <App/> }  path="/" />
			<Route element = { <Imgs/> }  path="/moreimages" />
		</Routes>
		</BrowserRouter>
	)
 }
 
 export default RootMap;