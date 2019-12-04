import React, { Component } from "react";
import books from "../Books/books";
import "./style.css";
class DescriptionBook extends Component{
    carrinho = [];
	isLoaded = false;
	comprar = (item) => {
		this.carrinho.push(item);
		this.isLoaded = true;
	}
    render(){
        const id = this.props.match.params.id;
        const it = books.filter(l => l.id === id);
        return(
            <div className="jumbotron">
                <div className="row">
                    <div className="col-md-6 col-12 capa">
                        <img
                            src={require("../../img/"+it[0].nome+".png")}
                            alt=" "
                            width="55%"
                            key={it[0].id}
                        />
                    </div>
                    <div className="col-md-4 col-12">
                        <strong 
                            className="text-capitalize d-inline-block text-truncate" 
                            id="titulo"
                        >{it[0].nome}</strong><br />
                        <small>{it[0].autor}</small><br />
                        <p>
                            <strong>Descrição</strong><br/>
                            {it[0].descricao}
                        </p>
                        <button 
                            key={it.id} 
                            className="btn btn-outline-warning btn-lg btn-block" 
                            onClick={this.comprar(it.id)}
                        >
                            Comprar
                        </button>
                    </div>
                </div>
            </div>
        )
    }            
}
export default DescriptionBook;