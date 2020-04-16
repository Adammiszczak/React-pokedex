import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

export class PokemonList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokeList: [],
            pokeListCopy: [],
            currentPageCards: [],
            currentPage: 1,
            postsPerPage: 24,
            pageNumbers: 1,
            totalPosts: 100,
            isSorted: false,
            isLoading: true
        };
        this.handlePagination = this.handlePagination.bind(this);
    }

// Setting page on pagination

    handlePagination(event) {

        this.setState({
            currentPage: Number(event.target.dataset.pageid)
        });
    }

// Sorting listing alphabetically

    handleSort() {

        const myData = this.state.pokeListCopy.slice();
        const isSorted = this.state.isSorted;
        myData.sort(function (a, b) {
            let comparison = 0;
            if (a.name < b.name) { comparison = -1; }
            if (a.name > b.name) { comparison = 1; }
            if (!isSorted) {
                return comparison;
            } else if (isSorted) {
                return comparison * -1;
            }
        });

        this.setState({ pokeListCopy: myData, isSorted: !isSorted })

    }

    componentDidMount() {

    // Current State Cache

        let currentComponent = this;

    // Fetching detailed data about pokemon and save is as a state

        async function getPokemons() {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${currentComponent.state.totalPosts}`);
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

                currentComponent.setState({ pokeList, pokeListCopy: pokeList, isLoading: false })

            } catch (error) {
                console.error(error);
            }
        }
        getPokemons()
    }

    render() {

    // Pagination logic

        const lastCard = this.state.currentPage * this.state.postsPerPage;
        const firstCard = lastCard - this.state.postsPerPage;
        const totalCards = this.state.pokeListCopy;
        const currentPageCards = totalCards.slice(firstCard, lastCard);
        this.state.currentPageCards = currentPageCards;
        const pageNumbers = [];

        for (let i = 1; i <= Math.ceil(totalCards.length / this.state.postsPerPage); i++) {
            pageNumbers.push(i);
        }

    // Pagination interactive component

        const RenderPagination = () => (
     
        <div className="row justify-content-end mx-4">
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {
                    pageNumbers.map(singlePage =>
                        <li key={`page${singlePage}`} className={this.state.currentPage === singlePage ? `page-item active` : `page-item`}><div data-pageid={singlePage} onClick={this.handlePagination} className="page-link">{singlePage}</div></li>
                    )}
                </ul>
            </nav>
        </div>
        );

        return (
            <section className="py-5 my-5">
                <div className="container">
                    <h1>
                        Pokemon lists - Page Number {this.state.currentPage}
                    </h1>
                    <div className="container my-5">
                        <div className="row justify-content-end my-3 mx-2">
                            <div className="col-md-6 col-lg-5">
                                <button onClick={() => this.handleSort()} className="btn btn-light btn-block">
                                    <i className="fa fa-sort" aria-hidden="true"></i>  {!this.state.isSorted ? "Sort alphabetically ascending A-Z" : "Sort alphabetically descending Z-A"}</button>
                            </div>
                        </div>
                        <div className="row mx-2">
                            {
                            this.state.currentPageCards.map((pokemon, index) =>
                                <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-4">
                                    <div className="rounded shadow-sm"><img
                                        src={pokemon.image}
                                        alt={`Pokemon ${pokemon.name}`}
                                        className="bg-secondary img-fluid card-img-top" />
                                        <div className="bg-light py-3">
                                            <h5 className="text-dark">
                                                {pokemon.name}
                                            </h5>
                                        <Link key={pokemon.path} to={`/pokemon/${pokemon.name}`}>
                                            <button type="button" className="btn btn-danger btn-sm text-decoration-none font-weight-bold">Read more about {pokemon.name}</button>
                                        </Link>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    <RenderPagination />
                    </div>
                </div>
            </section>
        )
    }
}

export default PokemonList
