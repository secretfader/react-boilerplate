import types from '../constants';
import { CALL_HTTP } from '../middleware/fetch';

export function get() {
	return {
		type: types.GET_NOTES,
		payload: [
			{ id: 1, content: 'This is Note #1.' },
			{ id: 2, content: 'This is Note #2.' }
		]
	};
}

export function load() {
	return {
		[CALL_HTTP]: {
			endpoint: '/api/notes',
			types: [
				types.FETCH_NOTES_REQUEST,
				types.FETCH_NOTES_SUCCESS,
				types.FETCH_NOTES_FAILURE
			]
		}
	};
}
