import React, { Component } from "react";
import books from "../Books/books";
import { Link } from "react-router-dom";
class DescriptioBook extends Component{
    render(){
        return(
            <div>
                {books.map(it => (
                    <div className="container col-12 col-md-3 listView">
                        <div className="livro">
                            <Link to={`/DescripitionBook/${it.id}`}>
                            <img
                                src={require("../../img/"+it.nome+".png")}
                                alt=" "
                                className="capa-livro"
                                key={it.id}
                            />
                            </Link>
                        </div>
                        <div className="container">
                            <strong 
                                className="text-capitalize d-inline-block text-truncate" 
                                id="titulo"
                            >{it.nome}</strong><br />
                            <small className="text-capitalize">{it.autor} - {it.lancamento}</small>
                            <br/><br/>
                            <strong>R$: {it.preco}</strong>
                            <br/><br/>
                            <button 
                                key={it.id} 
                                className="btn btn-outline-warning btn-lg btn-block" 
                                onClick={() => this.comprar(it.id)}
                            >
                                Comprar
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        )
    }            
}
export default DescriptioBook;