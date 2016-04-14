/* global document */
import { render } from 'react-dom';
import configureRouter from './router';
import configureStore from './store';
import configureContext from './context';

const router = configureRouter();

router.start((err, route) => {
	if (err) {
		throw err;
	}

	const options = { router: { route: route } };
	const store = configureStore(options, router);
	const context = configureContext(store, router);

	render(context, document.getElementById('app'));
});
