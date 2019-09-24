import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SplashPage from './components/splash_page'
import PatientIndexContainer from './components/Patients/patient_index_container';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={SplashPage} />
        <Route exact path="/patients" component={PatientIndexContainer} />
      </Switch>
    </div>
  );
}

export default App;
