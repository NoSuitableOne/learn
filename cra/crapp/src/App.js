import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Example from './containers/example';
import Galerie from './containers/galerie';


class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Router>
          <div>
            <ul>
              <li><Link to="/">首页</Link></li>
              <li><Link to="/example">画廊</Link></li>
            </ul>
            <hr/>
            <Route exact path="/" component={Galerie}/>
            <Route path="/example" component={Example}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
