import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { startsWithSegment } from 'router5.helpers';
import { routeNodeSelector } from 'redux-router5';
import Nav from './nav';
import Home from './home';
import NotesList from './notes-list';
import NotFound from './not-found';

function App({ route }) {
	if (!route || route.name === '404') {
		return <NotFound/>;
	}

	const matches = startsWithSegment(route.name);

	if (matches('home')) {
		return (
			<div>
				<Nav/>
				<Home/>
			</div>
		);
	}

	if (matches('local') || matches('all')) {
		return (
			<div>
				<Nav/>
				<NotesList/>
			</div>
		);
	}
}

App.propTypes = {
	route: PropTypes.object.isRequired
};

export default connect(routeNodeSelector(''))(App);
