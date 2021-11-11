import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      title: "Hello from BridgeLabz",
      userName: 'Ajay',
      url: "https://www.bridgelabz.com/",
      nameError:''

    }
  }

  onClick = (event) => {
    console.log("image clicked", event);
    window.open(this.url, "_blank");
  }

  onNameChange = (event) => {
    console.log("value is " , )
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    this.setState({userName: event.target.value})
    if (nameRegex.test(event.target.value)) {
      this.setState({nameError: ''})
    }
    else {
      this.setState({nameError: "Name is incorrect"})
    }
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
        <div>
          <input onChange={this.onNameChange} />
          <span className="error-output">{this.state.nameError}</span>
        </div>
      </header>
    </div>
    )
  }

}

export default App;
