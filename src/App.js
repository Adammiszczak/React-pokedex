import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


import Main from './containers/Main/Main';
import PokemonCard from './containers/PokemonCard/PokemonCard';

const Navigation = () => (

  <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarToggler">

      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home page</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/pokemon">Main List</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About project</Link>
        </li>

      </ul>
    </div>
  </nav>

)


const Home = () =>
  <section className="py-5 my-5">
    <div className="container">
      <h1>My Home Page</h1>
      <div className="my-5 p-3 display-4" style={{ "backgroundColor": "rgba(119, 111, 111, 0.18)" }}>
        <p>Welcome at my PokeDex Project</p>
        <img className="my-3" src={require('../src/images/psyduck.png')} alt="psyduck"/>
        <p>Select section from menu!</p>
        
      </div>
    </div>
  </section>;


const About = () => 
<section className="py-5 my-5">
  <div className="container">
    <h1>About Project</h1>
    <div className="my-5 p-3 text-justify" style={{ "backgroundColor": "rgba(119, 111, 111, 0.18)" }}>
      <p>This project is another one of recruitment task for my application as Junior Front-end Developer. This time it was from one big company. The task is to create custom Pokedex (pokemon lists). The goals are:</p>
      <ul className="text-left">
        <li>The app should have list with pagination</li>
        <li>The app should have at least one sort options</li>
        <li>The app should use the PokeApi v2</li>
        <li>The app should be launched by "npm start"</li>
        <li>The app should be compatible with node.js v12</li>
        <li>The app should be fully responsive</li>
      </ul>
      <p>I met a few obstacles:</p>
      <ul className="text-left">
        <li>The PokeApi doesn't enable endpoints to sort data at backend</li>
        <li>There is need for some asynchronic functions for fetches</li>
        <li>Making pagination and sorting at the some time was challenging</li>
      </ul>
      <p>Further plans for this app:</p>
      <ul className="text-left">
        <li>Javascript unit tests, which I have to learn!</li>
        <li>Basic backend</li>
        <li>Ux improvements</li>
        <li>Users login platform</li>
      </ul>
    </div>
    </div>
    </section>;

function App() {
  return (

    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pokemon" component={Main} />
          <Route path="/pokemon/:pokemonId" component={PokemonCard} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
