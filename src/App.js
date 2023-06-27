import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';

function App() {
  return (
    <Router>
      <div className="App">
      <div className="left-image"></div>
        <div className="right-image"></div>
        <div className="content">
        <Navbar />
        <Switch>
          <Route path="/projects" component={Projects} />
          <Route path="/experience" component={Experience} />
          <Route path="/skills" component={Skills} />
          <Route path="/education" component={Education} />
          <Route path="/" component={Home} />
        </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;