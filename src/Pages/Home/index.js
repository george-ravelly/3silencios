import React, { Component } from "react";
import Cabecalho from "../../Component/menu";
import Rodape from "../../Component/rodape";

class Home extends Component {
	render() {
		return (
			<div>
				<Cabecalho />
				<div>
					<div className="carousel slide" data-ride="carousel">
						<div className="carousel-inner">
							<div className="carousel-item active">
								<img
									src={require("../../img/o temor do sabio.png")}
									class="d-block w-45"
									alt="..."
								/>
								<p>
									O temor do sabio
									<br />
									Um sabio uma vez disse, apenas três coisas se deve temer,
									<br />
									1 um mar em tormenta
									<br />
									2 uma noite sem luar
									<br />
									3 a furia de um homem gentil
									<br />
								</p>
							</div>
							<div className="carousel-item">
								<img
									src={require("../../img/a musica do silencio.png")}
									class="d-block w-45"
									alt="..."
								/>
								<p>
									A musica do silencio
									<br />
									Um sabio uma vez disse, apenas três coisas se deve temer,
									<br />
									1 um mar em tormenta
									<br />
									2 uma noite sem luar
									<br />
									3 a furia de um homem gentil
									<br />
								</p>
							</div>
							<div className="carousel-item">
								<img
									src={require("../../img/o nome do vento.png")}
									class="d-block w-45"
									alt="..."
								/>
								<p>
									O nome do vento
									<br />
									Um sabio uma vez disse, apenas três coisas se deve temer,
									<br />
									1 um mar em tormenta
									<br />
									2 uma noite sem luar
									<br />
									3 a furia de um homem gentil
									<br />
								</p>
							</div>
						</div>
					</div>
					<div className="container lista-livros">
						<div className="jumbotron">
							<h3>Melhores da Semana:</h3>
							<p>
								<ul>
									<li>Guerra dos Tronos</li>
									<li>Percy Jackson</li>
									<li>O nome do Vento</li>
								</ul>
							</p>
						</div>
					</div>
				</div>
				<Rodape />
			</div>
		);
	}
}

export default Home;
