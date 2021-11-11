import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import WelcomePage from './Welcome';

class App extends React.Component {

  render() {
    return (
      <div>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/">Wecome</Link>
        </li>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<WelcomePage />} />
        </Routes>
      </div>
    )

  }

}

export default App;
