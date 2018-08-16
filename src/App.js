import React, { Component } from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";

class App extends Component {


  render() {
    return (
      <div className="App">
      <br/>
      <br/>
        <Router>
          <div>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/About" component={About}></Route>
            <Route exact path="/Description" component={Description}></Route>
            <Route exact path="/About" component={About}></Route>
            <Route exact path="/TableOfContents" component={TableOfContents}></Route>
            <Route exact path="/Authors" component={Authors}></Route>
            <Route exact path="/Author" component={Author}></Route>
            <Route exact path="/Imprint" component={Imprint}></Route>
            <Route exact path="/Contact" component={Contact}></Route>
            <Route exact path="/Buy" component={Buy}></Route>
           </div>
        </Router>
      </div>
    );
  }
}

export default App;
