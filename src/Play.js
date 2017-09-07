import React, { Component } from 'react';
import ReactPlayer from 'react-player'

class Play extends Component {

  	getMovieId(movie, idMovie) {
  		console.log(idMovie);
  		return movie.id === idMovie;
  	}

  	getUrl(idMovie) {
  		var ret = null;
  		const entries = window.entries;
  		var obj = entries.find(x => x.id === idMovie);
  		if (obj !== undefined) {
  			ret = obj.contents[0].url;
  		}
  		return ret;
  	}

	render () {
    	var id = (this.props.match.params.value);
    	var url = null;
    	if (id !== undefined) {
    		url = this.getUrl(id); 
    	}
    	
    	return ( 
    		<div className="player">
    			<ReactPlayer url={url} controls={true} playing className="player"/>
    		</div>
    	)
	}
}

export default Play;