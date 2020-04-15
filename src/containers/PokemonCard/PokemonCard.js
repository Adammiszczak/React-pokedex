import React, {Component} from 'react'

import axios from 'axios';

export class PokemonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            pokemonDetail: []
        };
    }


    componentDidMount() {
        console.log("Here are PokemonCard Mounted")
        let pokemonName = this.props['match']['params']['pokemonId'];
        let currentPokemon = this;

        async function getPokemonSingle() {

            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
                const pokemonDetail = response.data;
                const {
                    name,
                    weight,
                    height,
                    base_experience,
                    stats,
                    sprites: {
                        front_default,
                        back_default,
                        front_shiny
                    }
                } = pokemonDetail;
 
                currentPokemon.setState({
                    isLoading: false,
                    pokemonDetail: {
                    name,
                    weight
                }})
                console.log(currentPokemon.state.isLoading);
            } catch (error) {
                console.error(error);
            }
        }

        getPokemonSingle()

    }

    
 
    render() {
        return (


            <div>
                Single Card
                {this.state.isLoading 
                ? <div>The Content is Loading</div>
                : 
                <React.Fragment>
                <div>Name is: {this.state.pokemonDetail.name}</div>
                <div>Weight is: {this.state.pokemonDetail.weight}</div> 
                </React.Fragment>  
                }
                
            </div>
        )
    }
}

export default PokemonCard
