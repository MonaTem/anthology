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
           </div>
        </Router>
      </div>
    );
  }
}

export default App;
