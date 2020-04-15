import React, { Component } from 'react'
import PokemonList from '../PokemonList/PokemonList';

export class Main extends Component {
    render() {
        return (
            
            <React.Fragment>

            <h1>
              Custom Pokedex with react  
            </h1>
                <PokemonList />
            </React.Fragment>
        )
    }
}

export default Main;
