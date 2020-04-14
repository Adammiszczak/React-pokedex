import React, { Component } from 'react'

import axios from 'axios';


export class PokemonList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokeList: [],
        };
      }

    componentDidMount() {
        let currentComponent = this;

        async function getPokemons() {
            try {
              const response = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=30');
              const pokeList = response.data.results.map((result,index) => ({
                  name: result.name,
                  id: index + 1,
                  image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
              }));
              

              currentComponent.setState({pokeList})
              console.log(currentComponent.state.pokeList);

            } catch (error) {
              console.error(error);
            }
          };
          getPokemons();
    
    }
    

    render() {
        return (
               <React.Fragment>
            <h2>
               Pokemon lists 
            </h2>
            <ul>
            {this.state.pokeList.map((pokemon,index) => <li key={index}>Name: {pokemon.name} </li>)}
            </ul>
                </React.Fragment>
        )
    }
}

export default PokemonList
