import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import VideoPlayer from './components/VideoPlayer';
import NavBar from './components/NavBar';

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
                  <VideoPlayer />
                </Route>

              </Switch>
      </Router>
    </div>
  );
}

export default App;
