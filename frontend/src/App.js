import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SplashPage from './components/splash_page';
import PatientShowContainer from './components/Patients/patient_show_container';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={SplashPage} />
        <Route path='/show' component={PatientShowContainer} />
      </Switch>
    </div>
  );
}

export default App;
