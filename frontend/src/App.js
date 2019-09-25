import React from 'react';
import { Switch, Route } from 'react-router-dom';


import PatientIndexContainer from './components/Patients/patient_index_container';

import SplashPage from './components/splash_page';
import PatientShowContainer from './components/Patients/patient_show_container';

// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={SplashPage} />
     
        <Route exact path="/patients" component={PatientIndexContainer} />

        <Route path='/show/:patientId' component={PatientShowContainer} />

      </Switch>
    </div>
  );
}

export default App;
