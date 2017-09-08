import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import App from './App'

import './index.css';

ReactDOM.render(
	  <HashRouter>
	    <App />
	  </HashRouter>,
	document.getElementById('root')
);

/*	

<div className="header">
	      <ul>
	        <li><Link to="/">Home</Link></li>
	        <li><Link to="/history/">History</Link></li>
	      </ul>
	      <hr/>
	      <Route exact path="/" component={SlickCarousel}/>
	      <Route path="/history/" component={History}/>
	      <Route path="/play/:value" component={Play} />
	    </div>

ReactDOM.render(
	  <SlickCarousel />,
	  document.getElementById('container')
	);
*/