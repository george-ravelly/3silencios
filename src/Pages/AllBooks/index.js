import React, { Component } from "react";
import books from "../Books/books";
//import DescriptionBook from "../DescriptionBook";
import { Link } from "react-router-dom";
import "./style.css";

class AllBooks extends Component {
	carrinho = [];
	isLoaded = false;
	comprar = (item) => {
		this.carrinho.push(item);
		this.isLoaded = true;
	}
	render() {
		return (
			<div className="list">
				<div className="container mb-3 mt-3">
					<h3>Livros:</h3><br />
					<div className="row">
						{books.map(it => (
							<div className="view border border-white col-xl-3 col-lg-4 col-12">
								<Link to={`/listBooks/${it.id}`}>
									<img
										src={require("../../img/"+it.nome+".png")}
										alt=" "
										className="capa-livro"
										key={it.id}
									/>
								</Link>
								<div className="container">
									<strong 
										className="text-capitalize d-inline-block text-truncate" 
										id="titulo"
									>{it.nome}</strong><br />
									<small className="text-capitalize">{it.autor} - {it.lancamento}</small>
									<br/>
									<strong>R$: {it.preco}</strong>
									<br/>
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
				</div>
			</div>
		);
	}
}

export default AllBooks;
