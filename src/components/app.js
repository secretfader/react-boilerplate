import React, { PropTypes } from 'react';
import { startsWithSegment } from 'router5.helpers';
import { routeNode } from 'react-router5';
import Home from './home';
import About from './about';
import NotFound from './not-found';

function App({ route }) {
	if (!route || route.name === '404') {
		return <NotFound/>;
	}

	const matches = startsWithSegment(route.name);

	if (matches('home')) {
		return <Home/>;
	}

	if (matches('about')) {
		return <About/>;
	}
}

App.propTypes = {
	route: PropTypes.object.isRequired
};

export default routeNode('')(App);
