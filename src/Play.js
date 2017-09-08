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
      if (entries !== undefined) {
        var obj = entries.find(x => x.id === idMovie);
        if (obj !== undefined) {
          ret = obj.contents[0].url;
        }
      }
  		return ret;
  	}

	render () {
      //Mocking url to test
    	var url = "http://d2bqeap5aduv6p.cloudfront.net/project_coderush_640x360_521kbs_56min.mp4";
      var id = (this.props.match.params.value);

    	if (id !== undefined) {
    		url = this.getUrl(id); 
    	}

      const divStyle = {
        width: 'auto !important',
        height: '100px',
        color:'red',
        display: 'inline-block'
      };
    	
    	return ( 
    		<div className="player">
    			<ReactPlayer url={url} controls={true} playing className="player" style={divStyle}  />
    		</div>
    	);
	}
}

export default Play;