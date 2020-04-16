import React from 'react'

export default function PokemonCarousel(props) {
    return (
        <section>
                                <div id="carouselExampleIndicators" className="carousel slide w-80 mx-auto my-3" data-ride="carousel">

                                    <div className="carousel-inner border bg-light">
                                        <div className="carousel-item active">
                                            <img className="d-block img-fluid mx-auto" src={props.imageFront} alt="First slide" />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block img-fluid mx-auto" src={props.imageBack} alt="Second slide" />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block img-fluid mx-auto" src={props.imageFrontShiny} alt="Third slide" />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block img-fluid mx-auto" src={props.imageBackShiny} alt="Third slide" />
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev btn-dark" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next btn-dark" href="#carouselExampleIndicators" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
        </section>
    )
}
