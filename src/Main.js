import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'

import SlickCarousel from './SlickCarousel';
import History from './History'
import Play from './Play'

class Main extends Component {
  render() {
    console.log(this.props);
    return (
	  	<Switch>
	      	<Route exact path='/' component={SlickCarousel}/>
	      	<Route path='/history' component={History}/>
	      	<Route path="/play/:value" component={Play} />
	    </Switch>
    );
  }
}

export default Main;