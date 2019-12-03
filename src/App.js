import React, { Component } from "react";
import Home from "./Pages/Home";
import Cabecalho from "./Component/menu";
import Rodape from "./Component/rodape";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DescriptioBook from "./Pages/DescriptionBook";

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Cabecalho />
					<Switch>
						<Route path="/listBooks" exact component={DescriptioBook} />
						<Route path="/listBooks/:id" component={DescriptioBook} />
						<Route path="/" exact component={Home} />
					</Switch>
					<Rodape />
				</div>
			</Router>
		);
	}
}

export default App;
