import { compose, createStore, applyMiddleware } from 'redux';
import { router5Middleware } from 'redux-router5';
import fetchMiddleware from './middleware/fetch';
import onActivateMiddleware from './middleware/onactivate';
import routes from './routes';
import reducers from './reducers';
import config from '../config';

console.log(config.get('api.host'));

export default function configureStore(router, state = {}) {
	const stack = compose(
		applyMiddleware(
			fetchMiddleware(),
			router5Middleware(router),
			onActivateMiddleware(routes)
		)
	)(createStore);

	const store = stack(reducers, state);
	return store;
}
