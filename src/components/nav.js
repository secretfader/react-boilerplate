import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from 'redux-router5';
import Link from './link';

class Nav extends Component {
	constructor(props, context) {
		super(props);
		this.router = context.router;
	}

	render() {
		const { navigateTo } = this.props;
		return (
			<nav>
				<li>
					<Link router={this.router}
								navigateTo={navigateTo}
								name="home">
						Home
					</Link>
				</li>
				<li>
					<Link router={this.router}
								navigateTo={navigateTo}
								name="local">
						Notes: Local
					</Link>
				</li>
				<li>
					<Link router={this.router}
								navigateTo={navigateTo}
								name="all">
						Notes: All
					</Link>
				</li>
			</nav>
		);
	}
}

Nav.propTypes = {
	route: PropTypes.object.isRequired,
	navigateTo: PropTypes.func.isRequired
};

Nav.contextTypes = {
	router: PropTypes.object.isRequired
};

function mapStateToProps(state) {
	return { route: state.router.route };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		navigateTo: actions.navigateTo
	}, dispatch);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Nav);
