import React from 'react';

import './App.css';
import Header from './components/Header';
import BodyTop from './components/BodyTop';
import BodyMiddle from './components/BodyMiddle';
import BodySlide from './components/BodySlide';

function App() {
  return (
    <div className="App">
      <Header/>
      <BodyTop/>
      <BodyMiddle/>
      <BodySlide/>
    </div>
  );
}

export default App;
