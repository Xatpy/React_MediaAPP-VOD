import React from 'react';
import ReactPlayer from 'react-player';

class Play extends React.Component<void, Props, void>  {
  	getMovieId(movie, idMovie) {
  		console.log(idMovie);
  		return movie.id === idMovie;
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

    // Using local storage to work with the history feature.
    // TODO: Save this data for user in server database
    registerHistoryLocalStorage(name) {
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
    }

	 render () {
      //Mocking url to test by default
    	var url = "http://d2bqeap5aduv6p.cloudfront.net/project_coderush_640x360_521kbs_56min.mp4";
      var id = (this.props.match.params.value);
      var name = null;

    	if (id !== undefined) {
        const objMovie = this.getMovie(id);
        if (objMovie) {
    		  url = objMovie.contents[0].url;
          name = objMovie.title;
        } 
    	}

      if (name !== null) {
        this.registerHistoryLocalStorage(name);
      }

      const divStyle = {
        width: 'auto !important',
        display: 'inline-block'
      };
    	
    	return ( 
    		<div className="player">
    			<ReactPlayer url={url} controls={true} playing className="player" style={divStyle} />
    		</div>
    	);
	}
}

export default Play;