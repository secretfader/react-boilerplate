import { compose, createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

export default function configureStore(state = {}) {
	const stack = compose(
		applyMiddleware()
	)(createStore);

	const store = stack(reducers, state);
	return store;
}
