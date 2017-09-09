import React, { Component } from 'react';

class History extends Component {
  	render() {
  		let registersMovies = JSON.parse(localStorage.getItem("movies"));
  		const showHistory = (registersMovies !== null) && (registersMovies.length > 0);
  		if (showHistory) {
  			registersMovies = registersMovies.filter(m => m.name !== null); // Safety check
  		}

	    return (
	      <div className="container history">
	        <h2>History</h2>
	        {showHistory ? (
		        <div className="listHistory">
		        	<ul>
			        {registersMovies.map((film, index) => (
			            <li data-index={index} key={index}>
			              <span className="filmTitle">{film.name} :: {(film.date) }</span>
			            </li>
		          	))}
		          	</ul>
		        </div>
		        ) : (
		        <div>
		        	<span>No history registered.</span>
		        </div>
	        )}
	      </div>
	    );
  }
}

export default History;