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
        <Nav />
        <main>
          <Route exact path='/' component={HomeScreen} />
        </main>
      </Router>
    </>
  );
}

export default App
