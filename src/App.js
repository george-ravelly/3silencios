import React, { Component } from "react";
import AllBooks from "./Pages/AllBooks";
import Home from "./Pages/Home";
import Cabecalho from "./Component/cabecalho";
import Rodape from "./Component/rodape";
import contato from "./Component/contato";
import sobre from "./Component/sobre";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DescriptionBook from "./Pages/DescriptionBook";

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Cabecalho />
					<Switch>
						<Route path="/listBooks/:id" component={DescriptionBook} />
						<Route exact path="/allBooks" component={AllBooks} />
						<Route exact path="/" component={Home} />
						<Route path="/sobre" component={sobre} />
						<Route path="/contato" component={contato} />
					</Switch>
					<Rodape />
				</div>
			</Router>
		);
	}
}

export default App;
