import { combineReducers } from 'redux';
import { router5Reducer } from 'redux-router5';
import types from '../constants';

export function notesReducer(state = { payload: [] }, action) {
	switch (action.type) {
		case types.GET_NOTES:
			return { payload: action.payload };
		default:
			return { ...state };
	}
}

export default combineReducers({
	router: router5Reducer,
	notes: notesReducer
});
