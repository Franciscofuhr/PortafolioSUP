import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Carrousel from './components/CarrouselExp/carrouselExp';

function App() {
  return (
    <>
      <Route  path='/' component={Home} />
      <Route  path='/' component={Carrousel} />

    </>
  );
}

export default App;
