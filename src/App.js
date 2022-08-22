import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navegator from "./header/nav/nav";

var appData = require('./app_data/shared_data.json');
var ptBR = require('./app_data/res_primaryLanguage.json');
var enUS = require('./app_data/res_secondaryLanguage.json');

var setLang = true;

const Header = React.lazy(() => import("./header/header.js"));

class App extends Component {

  render(){
    var resumeLang = setLang ? enUS : ptBR;

    return (
      <div className="App">
        <Router>
        <Navegator />
          <Routes>
            <Route path='#Header' component={Header} />
          </Routes>
        </Router>

        <Header 
          resumeInfo = {appData.info} 
          resumeLangDeps = {resumeLang}
        />
      </div>
    );
  }
}

export default App;