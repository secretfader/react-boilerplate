/* eslint no-unused-vars: 0 */
import { get as getNotes } from './actions/notes';

export default [
	{
		name: 'home',
		path: '/'
	},
	{
		name: 'notes',
		path: '/notes',
		onActivate: dispatch => params => {
			dispatch(getNotes());
		}
	},
	{
		name: '404',
		path: '/404'
	}
];
