/* global window */
import { compose, createStore, applyMiddleware } from 'redux';
import { router5Middleware } from 'redux-router5';
import onActivateMiddleware from './middleware/onactivate';
import routes from './routes';
import reducers from './reducers';

export default function configureStore(router, state = {}) {
	const stack = compose(
		applyMiddleware(
			router5Middleware(router),
			onActivateMiddleware(routes)
		)
	)(createStore);

	const store = window.store = stack(reducers, state);
	return store;
}
