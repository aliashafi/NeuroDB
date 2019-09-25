import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SplashPage from './components/splash_page'
import CreatePatientContainer from './components/Patients/patient_create_form_container'
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={SplashPage} />
        <Route exact path="/patient/create" component={CreatePatientContainer} />
      </Switch>
    </div>
  );
}

export default App;
