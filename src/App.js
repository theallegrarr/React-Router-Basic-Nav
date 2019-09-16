import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <div>
    <Navigation />
    <Route exact path="/" component={Home} value={`let's go there`}/>
    <Route path="/contact" component={About} />
    <Route path="/about" component={Contact} />
  </div>

  
);

export default App;
