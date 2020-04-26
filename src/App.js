import React from 'react';
import './App.css';
import { Nav } from './Nav';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { PageNotFound } from './PageNotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  const styles = {
    margin: '2rem',
    backgroundColor: '#031D44',
    color: 'whitesmoke'
  }

  return (
    <Router>
      <section style={styles}>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={PageNotFound} />
        </Switch>
        <Footer />
      </section>
    </Router>

  );
}

export default App;