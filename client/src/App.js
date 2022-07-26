import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <>
      <Route path='/' component={Home} />
    </>
  );
}

export default App;
