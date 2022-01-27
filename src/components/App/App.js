import React from 'react';
import './App.css'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
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
    <div className= "App">
     <Header />
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
      <Footer />
    </div>
  );
}

export default App;
