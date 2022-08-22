import "./App.css";
import React, { Component } from "react";

const Header = React.lazy(() => import("./header/header.js"));
class App extends Component {

  constructor(props) {
    super();
    this.state = {
      foo: "bar",
      resumeData: {},
      sharedData: {},
    };
  }
  render(){
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;