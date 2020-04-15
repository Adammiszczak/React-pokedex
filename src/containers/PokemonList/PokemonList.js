import React, {Component} from 'react'
import {Link } from 'react-router-dom'
import axios from 'axios';



export class PokemonList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokeList: []
        };
    }

    componentDidMount() {
        let currentComponent = this;

        async function getPokemons() {
            try {
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=30');
                const pokeList = response
                    .data
                    .results
                    .map((result, index) => ({
                        name: result.name,
                        id: index + 1,
                        urlDetail: result.url,
                        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
                        path: `/pokemon/${result.name}`
                    }));

                currentComponent.setState({pokeList})
                console.log(currentComponent.state.pokeList);

            } catch (error) {
                console.error(error);
            }
        }

        getPokemons()

    }

    render() {
        return (
            <React.Fragment>
                
                <h2>
                    Pokemon lists
                </h2>
                <ul>
                    {this.state.pokeList.map((pokemon, index) =>  
                    <li key={index}>
                        <div style={{"border":"1px solid black"}}>
                        <p>Name: {pokemon.name}</p>
                        <p><Link key={pokemon.path} to={`/pokemon/${pokemon.name}`}>Read more about {pokemon.name}</Link></p>
                        </div>
                        </li>)}
                </ul>

            </React.Fragment>
        )
    }
}

export default PokemonList
