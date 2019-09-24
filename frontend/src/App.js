import React from 'react';
<<<<<<< HEAD
import logo from './logo.svg';
=======
import { Switch, Route } from 'react-router-dom';
import SplashPage from './components/splash_page'
// import logo from './logo.svg';
>>>>>>> 40da76dd655bf920afcd21b2595bc0b4b352a821
import './App.css';

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
      <Switch>
        <Route exact path="/" component={SplashPage} />
      </Switch>
>>>>>>> 40da76dd655bf920afcd21b2595bc0b4b352a821
    </div>
  );
}

export default App;
