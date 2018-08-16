import React, { Component } from 'react';
import './styles/Anthology.css';
import { BrowserRouter as Router, Route, Swtich } from "react-router-dom";

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
            <Route exact path="/authors" component={Author}></Route>
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

export default App;
