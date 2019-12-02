import React, { Component } from "react";
import Cabecalho from "../../Component/menu";
import Rodape from "../../Component/rodape";
import books from "../Books/books";
//import DescriptionBook from "../DescriptionBook";
import "./style.css";

class Home extends Component {
	carrinho = [];
	isLoaded = false;
	componentDidMount(){

	}
	maisInformacoes = (id) => {
		//<DescriptionBook id={id}/>
	}
	comprar = (item) => {
		this.carrinho[item] = item;
		this.isLoaded = true;
	}
	render() {
		return (
			<div>
				<Cabecalho />
				<br />
				<div className="main">
					<div className="container">
						<h3>Livros:</h3><br />
						<div className="row">
							{books.map(it => (
								<div className="container col-3 listView">
									<div className="livro">
										<img
											src={require("../../img/"+it.nome+".png")}
											alt=" "
											className="capa-livro"
											key={it.id}
											onClick={() => this.maisInformacoes(it.id)}
										/>
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
				<br />
				<Rodape />
			</div>
		);
	}
}

export default Home;
