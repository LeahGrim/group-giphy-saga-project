import React from 'react';
import GiphyForm from '../GiphyForm/GiphyForm.jsx'
import './App.css'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
//components
import Favorite from '../Favorite/Favorite';
import Results from '../Results/Results';
import GiphyForm from '../GiphyForm/GiphyForm.jsx';

function App() {
  return (
    <div className= "App">
     <Header />
    
      <BrowserRouter>
      <Route path="/" exact>
        <Favorite />
      </Route>
  </BrowserRouter>

      <GiphyForm />
      <Results />
      <Footer />
    
    </div>
  );
}

export default App;
