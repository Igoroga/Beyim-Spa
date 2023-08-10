import React from 'react';

import './App.css';
import Header from './components/Header';
import BodyTop from './components/BodyTop';
import BodyMiddle from './components/BodyMiddle';

function App() {
  return (
    <div className="App">
      <Header/>
      <BodyTop/>
      <BodyMiddle/>
    </div>
  );
}

export default App;
