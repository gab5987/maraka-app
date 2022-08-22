import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
} from './NavbarElements';

var appData = require('./app_data/shared_data.json');
var ptBR = require('./app_data/res_primaryLanguage.json');
var enUS = require('./app_data/res_secondaryLanguage.json');

const Header = React.lazy(() => import("./header/header.js"));

class App extends Component {
	constructor() {
    super();
    this.state = {
      language: ptBR
    };
  }

	changeLanguagePT = () => this.setState({ language:  ptBR });
	changeLanguageEN = () => this.setState({ language:  enUS });

  render(){

    return (
      <div className="App">
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

        <Header 
          resumeInfo = {appData.info} 
          resumeLangDeps = {this.state.language}
        />
				<Header 
          resumeInfo = {appData.info} 
          resumeLangDeps = {this.state.language}
        />
				<Header 
          resumeInfo = {appData.info} 
          resumeLangDeps = {this.state.language}
        />
				<Header 
          resumeInfo = {appData.info} 
          resumeLangDeps = {this.state.language}
        />
      </div>
    );
  }
}

export default App;