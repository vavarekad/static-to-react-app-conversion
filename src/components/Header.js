import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import AboutUs from './AboutUs'
import Coffee from './Coffee'
import ContactUs from './ContactUs'
import Home from './Home'

function Header() {

  return (
    <Router>
        <header>
            <nav>
                <ul>
                    <li> <Link to="/">Home</Link></li>
                    <li> <Link to="/about">About</Link></li>
                    <li> <Link to="/coffee">Coffee</Link></li>
                    <li> <Link to="/contactUs">Contact Us</Link></li>
                </ul>
            </nav>
        </header>
        <Switch>
            <Route path="/about"> <AboutUs /></Route>
            <Route path="/coffee"><Coffee /></Route>
            <Route path="/contactUs"> <ContactUs /> </Route>
            <Route path="/"><Home /> </Route>
        </Switch>
      </Router>
  );
}

export default Header;


 