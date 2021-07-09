import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import HomeScreen from './screen/HomeScreen';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Route exact path='/' component={HomeScreen} />
        <Nav />
      </Router>
    </>
  );
}

export default App
