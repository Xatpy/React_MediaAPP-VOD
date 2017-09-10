import React, { Component } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

class SlickCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    const urlMovies = "https://demo2697834.mockable.io/movies";
    this.loadMovies(urlMovies);
  }

  loadMovies(url) {
    var _this = this;
    this.loadJSON(url,
        function(data) {
            // Using state to sync carousel
            _this.setState({data: data.entries})
            //Using window object to have the data as global.
            // TODO: Get a general manager to handle this kind of data
            window.entries = data.entries;
          },
          function(xhr) { 
            console.error("Error: " + xhr); 
          }
      );
  };

  // This function could be moved to some utility library if the app
  // continues growing
  loadJSON(path, success, error) {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function()
      {
          if (xhr.readyState === XMLHttpRequest.DONE) {
              if (xhr.status === 200) {
                  if (success)
                      success(JSON.parse(xhr.responseText));
              } else {
                  if (error)
                      error(xhr);
              }
          }
      };
      xhr.open("GET", path, true);
      xhr.send();
  }

  render() {
    var settings = {
      className: 'center',
      infinite: true,
      centerPadding: '60px',
      slidesToShow: 6,
      dots: false,
      swipeToSlide: true,
      focusOnSelect: true,
    }
    return (
      <div className='container'>
        <Slider {...settings}>
          {this.state.data.map((film, index) => (
            <div data-index={index} key={index}>
                <Link to={{pathname:"/play/" + film.id}} >
                  <img src={film.images[0].url} alt={film.description}/>
                </Link>
              <span className="filmTitle">{film.title}</span>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default SlickCarousel;
