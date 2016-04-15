import React, { PropTypes } from 'react';

export default function Link(props) {
	const { name, params, router, navigateTo, options } = props;
	const href = router.buildUrl(name, params);
	const className = router.isActive(name, params) ? 'active' : '';
	const onClick = event => {
		event.preventDefault();
		navigateTo(name, params, options);
	};

	return (
		<a {...{href, onClick, className}}>{props.children}</a>
	);
}

Link.propTypes = {
	name: PropTypes.string.isRequired,
	params: PropTypes.object,
	router: PropTypes.object.isRequired,
	navigateTo: PropTypes.func.isRequired,
	options: PropTypes.object,
	children: PropTypes.node
};

Link.defaultProps = {
	params: {},
	options: {}
};
