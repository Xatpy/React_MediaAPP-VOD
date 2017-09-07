import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  hashHistory
} from 'react-router-dom'

import SlickCarousel from './SlickCarousel';
import History from './History'
import Play from './Play'

import './index.css';

ReactDOM.render(
 	<Router history={hashHistory}>
	    <div className="header">
	      <ul>
	        <li><Link to="/">Home</Link></li>
	        <li><Link to="/history/">History</Link></li>
	      </ul>
	      <hr/>
	      <Route exact path="/" component={SlickCarousel}/>
	      <Route path="/history/:value" component={History}/>
	      <Route path="/play/:value" component={Play} />
	    </div>
	</Router>,
	document.getElementById('root')
);
/*	ReactDOM.render(
	  <SlickCarousel />,
	  document.getElementById('container')
	);*/