import React from "react";
import { Link } from "react-router-dom";
function Cabecalho() {
	return (
		<header>
			<nav className="navbar navbar-dark bg-dark navbar-expand-sm">
				
				<Link to="/" className="navbar-brand">
					<img src={require("../img/ler.png")} width="45" alt=" " />
					3Silencios
				</Link>
				<button
					className="navbar-toggler"
					data-toggle="collapse"
					data-target="#webmenu"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="webmenu">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<Link to={`/allBooks`} className="nav-link">
								Todos os Livros
							</Link>
						</li>
						<li className="nav-item">
							<Link to={`/contato`} className="nav-link">
								Contato
							</Link>
						</li>
						<li className="nav-item">
							<Link to={`/sobre`} className="nav-link">
								sobre
							</Link>
						</li>
						<li className="nav-item">
							<Link data-toggle="modal" data-target="#lgcd" className="nav-link">
								Cadastrar/Logar
							</Link>
						</li>
					</ul>
				</div>
			</nav>
			<div id="lgcd" className="modal collapse" tabindex="-1" role="dialog">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Olá, Guerreiro</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<form className="form-group">
								Nome <input className="form-control" type="text" placeholder="Nome"/><br />
								Senha <input className="form-control" type="password" placeholder="senha"/><br/>
								<div className="modal-footer">
									<Link to="/" className="btn btn-secondary">Logar</Link>
									<Link to="/" className="btn btn-primary">Cadastrar</Link>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Cabecalho;
