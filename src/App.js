import React from 'react';
import './App.css';
import Main from './containers/Main/Main';
import PokemonCard from './containers/PokemonCard/PokemonCard';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

const Navigation = () => (

  <React.Fragment>
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link className="nav-link" to="/">Home page</Link>
          <Link className="nav-link" to="/pokemon">Main List</Link>
          <Link className="nav-link" to="/about">About project</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </React.Fragment>
)


const Home = () =>
  <React.Fragment>
    <Container className="my-5">
      <Row className="text-white my-5">
        <Col className="my-5"><h1>My Home Page</h1></Col>
      </Row>
      <Row className="my-5">
        <Col className="">
          <Jumbotron style={{ "opacity": "0.90" }} className="bg-dark text-white">
            <h3>Welcome at my PokeDex Project</h3>
            <img className="my-3" src={require('../src/images/psyduck.png')} alt="psyduck" />
            <p>
              <Link to="/pokemon"><Button size="lg" variant="primary">Launch list!</Button></Link>
            </p>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  </React.Fragment>;


const About = () =>
  <React.Fragment>
    <Container className="my-5">
      <Row className="text-white my-5 text-justify">
        <Col className="my-5 text-center"><h1>About project</h1></Col>
        <Jumbotron style={{ "opacity": "0.90" }} className="bg-dark text-white">
          <p>This project is another one of recruitment task for my application as Junior Front-end Developer. This time it was from one big company. The task is to create custom Pokedex (pokemon lists). The goals are:</p>
          <ul>
            <li>The app should have list with pagination</li>
            <li>The app should have at least one sort options</li>
            <li>The app should use the PokeApi v2</li>
            <li>The app should be launched by "npm start"</li>
            <li>The app should be compatible with node.js v12</li>
            <li>The app should be fully responsive</li>
          </ul>
          <p>I met a few obstacles:</p>
          <ul>
            <li>The PokeApi doesn't enable endpoints to sort data at backend</li>
            <li>There is need for some asynchronic functions for fetches</li>
            <li>Making pagination and sorting at the some time was challenging</li>
          </ul>
          <p>Further plans for this app:</p>
          <ul>
            <li>Javascript unit tests, which I have to learn!</li>
            <li>Basic backend</li>
            <li>Ux improvements</li>
            <li>Users login platform</li>
          </ul>
        </Jumbotron>
      </Row>
    </Container>
  </React.Fragment>;

function App() {
  return (

    <div className="App">
      <Router basename="/React-pokedex">
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
