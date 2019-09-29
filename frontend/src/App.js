import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SplashPage from './components/splash_page'
import CreatePatientContainer from './components/Patients/patient_create_form_container'
import PatientIndexContainer from './components/Patients/patient_index_container';
import PatientShowContainer from './components/Patients/patient_show_container';

import UserShowContainer from "./components/User/user_show_container";
import LoginFormContainer from "./components/Session/login_form_container";
import RegisterFormContainer from "./components/Session/register_form_container";
import DashboardContainer from './components/Dashboard/dashboard_container'
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={SplashPage} />
        <Route exact path="/patient/create" component={CreatePatientContainer} />     
        <Route exact path="/patients" component={PatientIndexContainer} />
        <Route path='/show/:patientId' component={PatientShowContainer} />

        <Route exact path="/users/:userId" component={UserShowContainer}/>

        <Route exact path="/login" component={LoginFormContainer}/>

        <Route exact path="/register" component={RegisterFormContainer}/>

        <Route exact path='/testing/deethree' component={} />




      </Switch>
    </div>
  );
}

export default App;
