import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import PokemonCarouselBt from './PokemonCarousel/PokemonCarouselBt';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

export class PokemonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            pokemonDetail: []
        };
    }

    componentDidMount() {
        // receive props and set state cache

        let pokemonName = this.props['match']['params']['pokemonId'];
        let currentPokemon = this;

        async function getPokemonSingle() {

        // fetching detailed data and save it as state

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
                        front_shiny,
                        back_shiny
                    }
                } = pokemonDetail;

                currentPokemon.setState({
                    isLoading: false,
                    pokemonDetail: {
                        name,
                        weight,
                        height,
                        base_experience,
                        stats,
                        sprites: {
                            front_default,
                            back_default,
                            front_shiny,
                            back_shiny
                        }
                    }
                })
            } catch (error) {
                console.error(error);
            }
        }

        getPokemonSingle()

    }

    render() {
        return (
            <Container className="pt-5 mt-5">
                <div className="container">
                    {this.state.isLoading
                        ? 
                        <div className="h4 text-white">The Content is Loading</div>
                        :
                        <React.Fragment>
                            <h1 className="text-capitalize text-white mb-5">{this.state.pokemonDetail.name} - Pokemon details</h1>
                            <PokemonCarouselBt 
                            imageFront={this.state.pokemonDetail.sprites['front_default']}
                            imageBack={this.state.pokemonDetail.sprites['back_default']}
                            imageFrontShiny={this.state.pokemonDetail.sprites['front_shiny']}
                            imageBackShiny={this.state.pokemonDetail.sprites['back_shiny']}
                            />
                                <div className="card">
                                    <div className="card-body">
                                    <Link to="/pokemon">
                                        <button type="button" className="btn btn-info text-decoration-none"><i className="fas fa-arrow-left"> Go back to list</i></button>
                                    </Link>
                                    </div>
                                </div>
                                <Table bordered hover className="table-light">
                                    <thead className="thead-light">
                                        <tr>
                                            <th>Property Name</th>
                                            <th>Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                       <tr>
                                           <th>Name</th>
                                           <td>{this.state.pokemonDetail.name}</td>
                                       </tr>   
                                       <tr>
                                           <th>Weight</th>
                                           <td>{this.state.pokemonDetail.weight} hectograms</td>
                                       </tr>   
                                       <tr>
                                           <th>Height</th>
                                           <td>{this.state.pokemonDetail.height} decimeters</td>
                                       </tr>   
                                       <tr>
                                           <th>Base experience for defeat</th>
                                           <td>{this.state.pokemonDetail.base_experience} xp</td>
                                       </tr>
                                       {
                                        this.state.pokemonDetail.stats.map((stat,index) => 
                                        <tr key={`tr-${index}`}>
                                            <th className="text-capitalize" scope="row">{stat['stat']['name']}</th>
                                            <td>{stat['base_stat']}</td>
                                        </tr>
                                        )}   
                                    </tbody>
                                </Table>
                        </React.Fragment>
                    }
                </div>
            </Container>
        )
    }
}

export default PokemonCard
