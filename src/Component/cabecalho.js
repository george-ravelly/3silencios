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
					</ul>
				</div>
			</nav>
		</header>
	);
}

export default Cabecalho;
