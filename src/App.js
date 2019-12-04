import React, { Component } from "react";
import Home from "./Pages/Home";
import Cabecalho from "./Component/cabecalho";
import Rodape from "./Component/rodape";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DescriptionBook from "./Pages/DescriptionBook";

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Cabecalho />
					<Switch>
						<Route exact path="/listBooks"component={DescriptionBook} />
						<Route path="/listBooks/:id" component={DescriptionBook} />
						<Route exact path="/" component={Home} />
					</Switch>
					<Rodape />
				</div>
			</Router>
		);
	}
}

export default App;
