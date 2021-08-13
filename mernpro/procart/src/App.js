import React from "react";
import Navbar from './modules/layout/navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Mobiles from './modules/product/components/Mobiles'
import Laptop from "./modules/product/components/Laptop";
import Upload from './modules/product/components/Upload';
import Watches from './modules/product/components/Watches';
import Signup from './modules/user/components/Signup';
// import Nav1 from './modules/layout/navbar/Nav1';
import './App.css';

let App = () => {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        {/* <Nav1/> */}
        <Switch>
          <Route exact path="/Mobile" component={Mobiles} />
          <Route exact path="/Laptop" component={Laptop} />
          <Route exact path="/Upload" component={Upload} />
          <Route exact path="/Watches" component={Watches} />
          <Route exact path="/Signup" component={Signup} />
        </Switch>
      </Router>

      <footer className='text-center'>
        <p className='text-danger'>Creater: <span style={{color:'blue'}}>Mr. SatyaJEET</span></p>
      </footer>

    </React.Fragment>
  );
};
export default App;