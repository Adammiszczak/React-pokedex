import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Main from './containers/Main/Main';
import PokemonCard from './containers/PokemonCard/PokemonCard';

const Navigation = () => (

<nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

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


const Home = () => <section className="py-5 my-5"><div className="container"><h1>My Home Page</h1></div></section>;
  

const About = () => <section className="py-5 my-5"><div className="container"><h1>My About Page</h1></div></section>;

function App() {
    return (

        <div className="App">
            <Router>
                <Navigation/>
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
