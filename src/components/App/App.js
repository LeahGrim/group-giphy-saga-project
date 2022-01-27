import React from 'react';
import Results from '../Results/Results'
import GiphyForm from '../GiphyForm/GiphyForm.jsx'

function App(props) {
  return (
    <div>
      <h1>Giphy Search!</h1>
      <GiphyForm />
      <Results />
    </div>
  );
}

export default App;
