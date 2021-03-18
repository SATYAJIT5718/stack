import React from 'react';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";import {Nav} from './Router/Nav';


function App() {
  return (
    <>
    <Router>
    <h1>Router example for SPA</h1>
    <Nav/>
    <switch>
      <Route exact path='/home' component={}/>
    </switch>
    </Router>
    
    </>
  );
}

export default App;
