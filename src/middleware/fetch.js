/* eslint no-unused-vars: 0 */
import 'isomorphic-fetch';
import {
	createStack,
	createFetch,
	base,
	method,
	accept,
	header,
	body,
	parseJSON
} from 'http-client';

export const CALL_HTTP = Symbol('CALL_HTTP');

export default function fetchMiddleware(host, settings = {}) {
	host = host || '//';
	settings = {
		accept: 'application/vnd.api+json',
		type: 'application/vnd.api+json',
		...settings
	};

	const stack = createStack(
		base(host),
		accept(settings.accept),
		header('Content-Type', settings.type),
		parseJSON()
	);

	return ({ dispatch }) => next => action => {
		const caller = action[CALL_HTTP];
		
		if (typeof caller === 'undefined') {
			return next(action);
		}

		let options = {
			method: 'get'
		};

		if (caller.options) {
			options = { options, ...caller.options };
		}

		const {
			endpoint,
			types: [requestType, successType, errorType]
		} = caller;

		let client = createStack(
			stack,
			method(options.method || 'get')
		);

		if (options.body) {
			client = createStack( 
				client,
				body(JSON.stringify(options.body))
			);
		}

		const request = createFetch(client);

		next({ type: requestType });

		return request(endpoint).then(payload => {
			next({
				type: successType,
				payload: payload
			});
		}).catch(error => {
			next({
				type: errorType,
				error: error
			});
		});
	};
}
