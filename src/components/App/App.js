import React from 'react';
import { render } from "react-dom";
import {
  HashRouter as Router,
  Route
} from "react-router-dom";
//components
import Search from '../Search/Search';
import Favorite from '../Favorite/Favorite';

function App() {
  return (
    <div>
      <h1>Giphy Search!</h1>

      <Router>

        <Route exact path="/">
          <Search />
        </Route>
          
        <Route exact path="/favorite" >
          <Favorite />
        </Route>

      </Router>
      
    </div>
  );
}

export default App;
