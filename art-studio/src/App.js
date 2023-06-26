import React from 'react';
import './App.css';
import NavMenu from './components/NavMenu';
import Social from './components/Social';
import Header from './components/Header';
import About from './components/About';
import Advantages from './components/Adv';
import Photography from './components/Photo';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
function App() {
  return (
    <>
      <NavMenu />
      <Social />
      <Header />
      <About />
      <Advantages />
      <Photography />
      <Gallery />
      <Contact />
    </>
  );
}

export default App;