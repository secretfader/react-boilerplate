import { actionTypes } from 'redux-router5';

const { TRANSITION_SUCCESS } = actionTypes;

export default function onActivateMiddleware(routes) {
	return ({ dispatch }) => next => action => {
		if (action.type === TRANSITION_SUCCESS) {
			const current =
				routes.find(r => r.name === action.payload.route.name);

			if (current && current.onActivate) {
				current.onActivate(dispatch)(
					action.payload.route.params
				);
			}
		}
		next(action);
	};
}
