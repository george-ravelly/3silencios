import React from "react";

function Cabecalho() {
	return (
		<header>
			<nav className="navbar navbar-dark bg-dark navbar-expand-sm">
				<img src={require("../img/ler.png")} width="45" alt=" " />
				<a href="a" className="navbar-brand">
					3Silencios
				</a>
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
							<a href="a" className="nav-link">
								Lançamentos
							</a>
						</li>
						<li className="nav-item">
							<a href="a" className="nav-link">
								Todos os Livros
							</a>
						</li>
						<li className="nav-item">
							<a href="a" className="nav-link">
								Contato
							</a>
						</li>
						<li className="nav-item">
							<a href="a" className="nav-link">
								Sobre
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
}

export default Cabecalho;
