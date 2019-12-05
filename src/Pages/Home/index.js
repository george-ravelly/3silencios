import React, { Component } from "react";
import "./style.css";
import Lancamento from "../../Component/lancamentos";
class Home extends Component{

    render(){
        return(
            <main>
                <div className="container banner">
                <div id="carouselExampleControls" className="carousel slide banner" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={require("../../img/banner/jornada no gelo.png")} className="d-block w-100" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Comece sua Aventura</h5>
                                <p>Livro mais buscado no site.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={require("../../img/banner/a musica do silencio.png")} className="d-block w-100" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>O Mundo da Ficção Fantastica é enorme!!!</h5>
                                <p>Series mais amadas do mundo fantastico</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={require("../../img/banner/jardins da lua.png")} className="d-block w-100" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Box de Luxo senhor dos aneis</h5>
                                <p>Promoção fantastica de final de ano</p>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                </div>
                <Lancamento />
            </main>
        )
    }
}

export default Home;
