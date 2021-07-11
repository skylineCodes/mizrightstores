import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import HomeScreen from './screen/HomeScreen';

const App = () => {
  return (
    <>
      <Router>
        <main>
          <Header />
          <Nav />
          <Switch>
            <Route path='/'>
              <HomeScreen />
            </Route>
          </Switch>
          <Footer />
        </main>
      </Router>
    </>
  );
}

export default App
