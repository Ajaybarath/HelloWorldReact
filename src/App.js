import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      title: "Hello from BridgeLabz",
      userName: ''
    }
    this.url = "https://www.bridgelabz.com/";
  }

  onClick = (event) => {
    console.log("image clicked", event);
    window.open(this.url, "_blank");
  }

  onNameChange = (event) => {
    console.log("value is " , )
    this.setState({userName: event.target.value})
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" onClick={this.onClick}/>
        <p>
          {this.state.title}
        </p>
        <h1>
          Hello {this.state.userName}
        </h1>
      </header>
    </div>
    )
  }

}

export default App;
