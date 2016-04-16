/* eslint no-unused-vars: 0 */
import {
	get as getNotes,
	load as loadNotes
} from './actions/notes';

export default [
	{
		name: 'home',
		path: '/'
	},
	{
		name: 'local',
		path: '/notes/local',
		onActivate: dispatch => params => {
			dispatch(getNotes());
		}
	},
	{
		name: 'all',
		path: '/notes/all',
		onActivate: dispatch => params => {
			dispatch(loadNotes());
		}
	},
	{
		name: '404',
		path: '/404'
	}
];
