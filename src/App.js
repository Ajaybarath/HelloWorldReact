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
      nameError: ''

    }
  }

  onClick = (event) => {
    console.log("image clicked", event);
    window.open(this.url, "_blank");
  }

  onNameChange = (event) => {
    console.log("value is ",)
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    this.setState({ userName: event.target.value })
    if (nameRegex.test(event.target.value)) {
      this.setState({ nameError: '' })
    }
    else {
      this.setState({ nameError: "Name is incorrect" })
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <div class="article">

            <h1>
              Hello {this.state.userName} from BridgeLabz
            </h1>
            <img src={logo} className="App-logo" alt="logo" onClick={this.onClick} />


            <input onChange={this.onNameChange} className="inputField" />
            <span className="error-output">{this.state.nameError}</span>

            <div className="content">
              <h3>At BridgeLabz, we are a tech community</h3>
              <ul class="offers">
                <li>Techonologist</li>
                <li>Thinkers</li>
                <li>Builders</li>
              </ul>
              <p class="description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>


            <footer class="footer">
              <p>To know about us, visit <a href="www.bridgelabz.com">BridgeLabz</a> i.e. <strong>Employability to
                all</strong></p>

            </footer>
          </div>
        </header>
      </div>
    )
  }

}

export default App;
