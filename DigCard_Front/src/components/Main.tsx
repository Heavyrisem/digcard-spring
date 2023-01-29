import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import View from './View';
import Create from './Create';

function Main() {
	return (
		<Router>
			<Switch>
				<Route path="/view/:id">
					<View />
				</Route>
				<Route path="/">
					<Create />
				</Route>
			</Switch>

		</Router>
	)
}

export default Main;