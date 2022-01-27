import React from 'react';
import GiphyForm from '../GiphyForm/GiphyForm.jsx'
import './App.css'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
function App(props) {
  return (
    <div className= "App">
      <Header />
     
      <GiphyForm />
      <Footer />
    </div>
  );
}

export default App;
