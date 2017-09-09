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

    getMovie(idMovie) {
      var ret = null;
      const entries = window.entries;
      if (entries !== undefined) {
        var obj = entries.find(x => x.id === idMovie);
        if (obj !== undefined) {
          return obj;
        }
      }
      return ret;
    }

	 render () {
      //Mocking url to test
    	var url = "http://d2bqeap5aduv6p.cloudfront.net/project_coderush_640x360_521kbs_56min.mp4";
      var id = (this.props.match.params.value);
      var name = null;

    	if (id !== undefined) {
        const objMovie = this.getMovie(id);
    		url = objMovie.contents[0].url;
        name = objMovie.title;
    	}

      const divStyle = {
        width: 'auto !important',
        display: 'inline-block'
      };

      var date = new Date();
      const dateFormatted = date.toDateString() + " :: " + date.toTimeString();

      var register = {
        "name" : name,
        "date" : dateFormatted
      };
      var registers = [];
      var storedHistoricFilms = JSON.parse(localStorage.getItem("movies"));
      if (storedHistoricFilms !== null) {
        registers = storedHistoricFilms;
      }
      registers.push(register);
      localStorage.setItem("movies", JSON.stringify(registers));
    	
    	return ( 
    		<div className="player">
    			<ReactPlayer url={url} controls={true} playing className="player" style={divStyle}  />
    		</div>
    	);
	}
}

export default Play;