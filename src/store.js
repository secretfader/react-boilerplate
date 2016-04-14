import { compose, createStore, applyMiddleware } from 'redux';
import { router5Middleware } from 'redux-router5';
import reducers from './reducers';

export default function configureStore(state = {}, router) {
	const stack = compose(
		applyMiddleware(router5Middleware(router))
	)(createStore);

	const store = stack(reducers, state);
	return store;
}
