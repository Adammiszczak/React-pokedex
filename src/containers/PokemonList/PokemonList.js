import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import pokeImage from '../../images/pokeball.png';

import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Pagination from 'react-bootstrap/Pagination'
import ReactImageFallback from "react-image-fallback";
import axios from 'axios';
import styles from "./PokemonList.module.css";

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

        // Fetching data about pokemons and save is as a state

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

                await currentComponent.setState({ pokeList, pokeListCopy: pokeList, isLoading: false })

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

            <Pagination className="mr-3">
                {
                    pageNumbers.map(singlePage =>
                        <Pagination.Item onClick={this.handlePagination} 
                        data-pageid={singlePage} 
                        key={`page${singlePage}`} 
                        className={this.state.currentPage === singlePage ? `page-item active` : `page-item`}>{singlePage}</Pagination.Item>
                    )}
            </Pagination>

        );


        const LoadingScreen = () => (
            <div className={styles.loader}>
                <div className={styles.spinner}></div>
            </div>
        )

        return (
            <React.Fragment>
                <LoadingScreen/>
                <Container className="my-5">
                    <Row className="text-white my-5">
                        <Col className="my-5"><h1>Pokemon lists - Page Number {this.state.currentPage}</h1></Col>
                    </Row>
                </Container>

                <Container className="mt-5">
                    <Row className="text-white justify-content-end mb-2">
                        <Col className="mb-2" lg={4} md={6}>
                            <button onClick={() => this.handleSort()} className="btn btn-light btn-block text-primary">
                                <i className={`fa ${!this.state.isSorted ? "fa-arrow-up" : "fa-arrow-down"}`} aria-hidden="true"></i>  {!this.state.isSorted ? "Sort A-Z" : "Sort Z-A"}</button>
                        </Col>
                    </Row>
                    <Row className="text-white my-2 text-justify">
                        {
                            this.state.currentPageCards.map((pokemon, index) =>

                                <Col className="mb-3" key={index} xl={3} lg={4} md={6} sm={6} xs={12}>
                                    <CardDeck>
                                        <Card border="dark">
                                            <Card.Img 
                                            as={ReactImageFallback} 
                                            fallbackImage={pokeImage} 
                                            initialImage={pokeImage} 
                                            className="bg-secondary" 
                                            variant="top" 
                                            src={pokemon.image} 
                                            alt={`Pokemon ${pokemon.name}`} />
                                            <Card.Body className="text-dark text-center">
                                                <Card.Title>{pokemon.name}</Card.Title>
                                                <Card.Text>
                                                    <Button as={Link} to={`/pokemon/${pokemon.name}`} variant="danger">Read more</Button>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </CardDeck>
                                </Col>
                            )}
                    </Row>
                    <Row className="text-white justify-content-end">
                        <RenderPagination />
                    </Row>
                </Container>
            </React.Fragment>

        )
    }
}

export default PokemonList
