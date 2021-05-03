import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import movies from './data';
import './App.css';
import Home from './Home';
import VideoPlayer from './VideoPlayer';
import NavBar from './NavBar';

function App() {

  //console.log(movies);

  return (
    <div className="App">
 
      <Router>
      <NavBar/>  
              <Switch>

                <Route exact path='/'>
                  <Home />
                </Route>

                <Route exact path='/videoplayer/:id?'>
                  <VideoPlayer movies={movies} />
                </Route>

              </Switch>
      </Router>
    </div>
  );
}

export default App;
