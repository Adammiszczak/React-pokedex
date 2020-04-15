import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Main from './containers/Main/Main';
import PokemonCard from './containers/PokemonCard/PokemonCard';

const Navigation = () => (
    <ul>
        <li>
            <Link exact to="/">Home Page</Link>
        </li>
        <li>
            <Link to="/pokemon">Main List</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
    </ul>

)


const Home = () => <h1>My Home Page</h1>;
  

const About = () => <h1>My About Page</h1>;

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
