import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';

export default function PokemonCarouselBt(props) {
    return (

        <React.Fragment>
            <Container className="px-0 my-3">
    <Carousel indicators={false} prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon bg-dark" />} className="bg-dark" style={{ "opacity": "0.90" }} >
                    <Carousel.Item>
                        <img
                            className="d-block img-fluid mx-auto"
                            src={props.imageFront}
                            alt="First slide"
                        /></Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block img-fluid mx-auto"
                            src={props.imageBack}
                            alt="Third slide"
                        /></Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block img-fluid mx-auto"
                            src={props.imageFrontShiny}
                            alt="Third slide"
                        /></Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block img-fluid mx-auto"
                            src={props.imageBackShiny}
                            alt="Third slide"
                        /></Carousel.Item>
                </Carousel>
            </Container>
        </React.Fragment>
    )
}
