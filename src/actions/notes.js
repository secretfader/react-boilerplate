import types from '../constants';

export function get() {
	return {
		type: types.GET_NOTES,
		payload: [
			{ id: 1, content: 'This is Note #1.' },
			{ id: 2, content: 'This is Note #2.' }
		]
	};
}
