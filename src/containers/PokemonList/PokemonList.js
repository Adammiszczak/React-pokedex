import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

export class PokemonList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokeList: [],
            pokeListCopy:[],
            currentPageCards: [],
            currentPage: 1,
            postsPerPage: 20,
            pageNumbers: 1,
            totalPosts: 100,
            isSorted:false
        };
        this.handlePagination = this.handlePagination.bind(this);
    }

    handlePagination(event) {
        // console.log(event.target.dataset.pageid);
        this.setState({
            currentPage: Number(event.target.dataset.pageid)
        });
    }

    handleSort() {
        // console.log(this.state.pokeListCopy)
        const myData = this.state.pokeListCopy.slice();
        const isSorted = this.state.isSorted;
        myData.sort(function(a, b){
            let comparison = 0;
            if(a.name < b.name) { comparison = -1; }
            if(a.name > b.name) { comparison = 1; }
            if (!isSorted) {
                return comparison;
            } else if (isSorted) {
                return comparison * -1;
            }
        });
        // console.log('myData' + JSON.stringify(myData));
        this.setState({pokeListCopy: myData,isSorted:!isSorted})
        console.log('isSorted' + isSorted);
    }

    componentDidMount() {
        let currentComponent = this;

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

                currentComponent.setState({ pokeList, pokeListCopy:pokeList })
                // console.log(currentComponent.state.pokeList);
                // console.log("poke copy" + currentComponent.state.pokeListCopy);
            } catch (error) {
                console.error(error);
            }
        }

        getPokemons()

    }

    render() {
        const renderState = this;

        const lastCard = this.state.currentPage * this.state.postsPerPage;
        const firstCard = lastCard - this.state.postsPerPage;
        const totalCards = this.state.pokeListCopy;
        const currentPageCards = totalCards.slice(firstCard, lastCard);
        this.state.currentPageCards = currentPageCards;

        // console.log("this.state.currentPageCards" + this.state.currentPageCards);
        // console.log("currentPageCards" + totalCards.slice(firstCard,lastCard));
        // console.log("firstCard" + firstCard);
        // console.log("lastCard" + lastCard);
        const pageNumbers = [];

        for (let i = 1; i <= Math.ceil(totalCards.length / this.state.postsPerPage); i++) {
            pageNumbers.push(i);
        }

        


        const RenderPagination = () => (
            <nav aria-label="Page navigation example">
                <ul className="pagination mx-5">
                    {pageNumbers.map(singlePage =>
                        <li key={`page${singlePage}`} className="page-item"><div data-pageid={singlePage} onClick={this.handlePagination} className="page-link">{singlePage}</div></li>
                    )}
                <li className="page-item"><div onClick={() => this.handleSort()} className="page-link">Sort</div></li>
                </ul>
            </nav>
        );

        return (

            <React.Fragment>
                <h2>
                    Pokemon lists
                </h2>
                <div className="container my-5">
                    <div className="row mx-2">
                        {this.state.currentPageCards.map((pokemon, index) =>
                            <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                                <div className="rounded shadow-sm"><img
                                    src={pokemon.image}
                                    alt={`Pokemon ${pokemon.name}`}
                                    className="bg-info img-fluid card-img-top" />
                                    <div className="bg-light py-3">
                                        <h5>
                                            {pokemon.name}
                                        </h5>

                                        <p className="small text-muted"><Link key={pokemon.path} to={`/pokemon/${pokemon.name}`}>Read more about {pokemon.name}</Link></p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <RenderPagination />
                </div>
            </React.Fragment>
        )
    }
}

export default PokemonList
