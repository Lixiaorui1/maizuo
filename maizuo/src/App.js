import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import Class from './components/Class';
import Cart from './components/Cart';
import "./style/reset.css";
import "./style/App.css";

class App extends Component {
  render() {
    return (
    	<Router>
    		<div className="App">
    			<Route exact path="/" component={Home} />
    			<Route path="/class" component={Class} />
    			<Route path="/cart" component={Cart} />
     		</div>
    	</Router>
    );
  }
}

export default App;
