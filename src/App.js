import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserView, MobileView } from 'react-device-detect';

import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn
} from './NavbarElements';

import {Twirl as Hamburger} from 'hamburger-react'
import Row1 from "./rows/row1/row1";
import Location from "./rows/row2/row2";
import Footer from "./footer/footer";

const Header = React.lazy(() => import("./header/header.js"));

var appData = require('./app_data/shared_data.json');
var ptBR = require('./app_data/res_primaryLanguage.json');
var enUS = require('./app_data/res_secondaryLanguage.json');

class App extends Component {
	constructor() {
    super();
    this.state = {
			hamburgerState: false,
      language: ptBR
    };
  }

	changeLanguagePT = () => this.setState({ language:  ptBR });
	changeLanguageEN = () => this.setState({ language:  enUS });

  render(){
    return (
      <div className="App">
				<BrowserView>
					<Router>
						<Nav>
							<Bars />
							<NavMenu>
								<NavLink to='home' activeStyle> Home </NavLink>
							</NavMenu>
							<NavBtn>
									<a onClick={this.changeLanguagePT} className="lang-button">pt-BR 🇧🇷 </a>
									<a onClick={this.changeLanguageEN} className="lang-button">en-US 🇺🇸 </a>
							</NavBtn>
						</Nav>
						<Routes>
							<Route path='#Header' component={Header}/>
						</Routes>
					</Router>
				</BrowserView>

				<MobileView>
					<Hamburger onClick={() => this.state.hamburgerState = !this.state.hamburgerState } />
				</MobileView>
				
        <Header 
          resumeInfo = {appData.info} 
          resumeLangDeps = {this.state.language}
        />
				<Row1/>
				<Location
					resumeLangDeps = {this.state.language.location}
				/>
				<Footer/>
      </div>
    );
  }
}

export default App;