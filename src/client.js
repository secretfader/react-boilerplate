/* global document */
import { render } from 'react-dom';
import configureRouter from './router';
import configureStore from './store';
import configureContext from './context';

const router = configureRouter();

router.start((err, state) => {
	if (err) {
		throw err;
	}

	const store = configureStore(router, {
		router: { route: state }
	});

	const context = configureContext(store, router);

	render(context, document.getElementById('app'));
});
