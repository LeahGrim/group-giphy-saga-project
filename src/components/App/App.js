import React from 'react';
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
    <div>
      <h1>Giphy Search!</h1>

      <BrowserRouter>
      <Route path="/" exact>
        <Favorite />
      </Route>
  </BrowserRouter>

      <GiphyForm />
      <Results />
    </div>
  );
}

export default App;
