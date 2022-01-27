import React from 'react';
import './App.css'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import { render } from "react-dom";
import {
  HashRouter as Router,
  Route,
  Link
} from "react-router-dom";
//components
import Search from '../Search/Search';
import Favorite from '../Favorite/Favorite';

function App() {
  
  return (
    <div className= "App">
      <Router>
        <nav>
          <Link to='/'>Search</Link>
          <Link to='/favorite'>My Favorites</Link>
        </nav>
        <Header />

        <Route exact path="/">
          <Search />
        </Route>

        <Route exact path="/favorite" >
          <Favorite />
        </Route>

        <Footer />
      </Router>

    </div>
  );
}

export default App;
