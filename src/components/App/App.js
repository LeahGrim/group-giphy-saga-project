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
      <Header />
        <nav> <div className= "homepageLinks"> 
          <div className= "search"> 
          <Link to='/'> <h1> Search</h1> </Link> 
          </div>
          <div className="favoriteBtn">
          <Link to='/favorite'> <h1> My Favorites</h1> </Link>
          </div>
          </div> </nav>

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
