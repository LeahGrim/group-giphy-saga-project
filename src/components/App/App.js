import React from 'react';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
//components
import Favorite from '../Favorite/Favorite'

function App() {
  return (
    <div>
      <h1>Giphy Search!</h1>

      <BrowserRouter>
      <Route path="/" exact>
        <Favorite />
      </Route>
  </BrowserRouter>,

    </div>
  );
}

export default App;
