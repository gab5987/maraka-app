import "./App.css";
import React, { Component } from "react";
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
import Services from "./rows/row3/row3";
import Footer from "./footer/footer";

import logo from "./app_data/navIcon.jpeg";

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
					<Nav>
						<img src={logo} alt="Logo" />
						<Bars />
						<NavBtn>
								<a onClick={this.changeLanguagePT} className="lang-button">pt-BR 🇧🇷 </a>
								<a onClick={this.changeLanguageEN} className="lang-button">en-US 🇺🇸 </a>
						</NavBtn>
					</Nav>
				</BrowserView>
				<MobileView>
					<Hamburger onClick={() => this.state.hamburgerState = !this.state.hamburgerState } />
				</MobileView>
				
        <Header 
          resumeInfo = {appData.info} 
          resumeLangDeps = {this.state.language}
        />
				<Row1/>
				<Services resumeInfo={this.state.language.services}/>
				<Location
					resumeLangDeps = {this.state.language.location}
				/>
				<Footer
					resumeSocialMedia = {appData.socialMedia}
				/>
      </div>
    );
  }
}

export default App;