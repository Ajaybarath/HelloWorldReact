import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      title: "Hello from BridgeLabz"
    }
    this.url = "https://www.bridgelabz.com/";
  }

  onClick = ($event) => {
    console.log("image clicked", $event);
    window.open(this.url, "_blank");
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" onClick={this.onClick}/>
        <p>
          {this.state.title}
        </p>
      </header>
    </div>
    )
  }

}

export default App;
