import React, { Component } from 'react';
import './styles/Anthology.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home.js';
import Description from './components/Description.js';
import TableOfContents from './components/TableOfContents.js';
import Author from './components/Author.js';
import Authors from './components/Authors.js';
import Imprint from './components/Imprint.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Buy from './components/Buy.js';

class Anthology extends Component {


  render() {
    return (
      <div className="App">
      <br/>
      <br/>
        <Router>
          <div>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/description" component={Description}></Route>
            <Route path="/tableofcontents" component={TableOfContents}></Route>
            <Route path="/authors/:author" component={Author}></Route>
            <Route exact path="/authors" component={Authors}></Route>
            <Route path="/imprint" component={Imprint}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/buy" component={Buy}></Route>
          </Switch>
           </div>
        </Router>
      </div>
    );
  }
}

export default Anthology;
