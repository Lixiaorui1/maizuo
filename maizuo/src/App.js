import React, { Component } from 'react';
import {BrowserRouter as Router, NavLink, Route} from 'react-router-dom';
import Home from './components/Home';
import "./style/reset.css";
import "./style/App.css";

class App extends Component {
  render() {
    return (
    	<Router>
    		<div className="App">
    			<Route exact path="/" component={Home} />
     		</div>
    	</Router>
    );
  }
}

export default App;
