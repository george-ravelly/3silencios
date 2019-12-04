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
		console.log(this.carrinho);
		this.isLoaded = true;
	}
	listLancamente = () => (
		books.filter(it => it.lancamento >= 2015)
	);
	render() {
		return (
			<div>
				<div className="main">
					<div className="container">
						<h3>Livros:</h3><br />
						<div className="row">
							{this.listLancamente().map(it => (
								<div className="container col-12 col-md-3 listView">
									<div className="livro">
										<Link to={`/listBooks/${it.id}`}>
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
					</div>
				</div>
			</div>
		);
	}
}

export default AllBooks;
