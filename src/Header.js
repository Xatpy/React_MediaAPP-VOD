import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class App extends Component {
  render() {
    return (
		<header className="header">
	    <nav>
	      <ul>
	        <li><Link to='/'>Home</Link></li>
	        <li className="navRight"><Link to='/history'><span className="historyLink">History</span></Link></li>
	      </ul>
	    </nav>
	  </header>
	);
  }
}

export default App;