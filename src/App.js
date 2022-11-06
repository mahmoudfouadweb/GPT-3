import React from 'react';
import { Brand, Cta, Navbar } from './components';
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGPT3
} from './containers';
import './App.css';
const App = () => {
  return (
    <div className="app">
      <div className="gradient__bg">
        {/* DONE */}
        <Navbar />
        {/* DONE */}
        <Header />
      </div>
      {/* DONE */}
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
