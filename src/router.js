import Router5 from 'router5';
import historyPlugin from 'router5-history';
import routes from './routes';

export default function configureRouter(options = {}) {
	options = {
		useHash: false,
		trailingSlash: false,
		defaultRoute: '404',
		...options
	};

	const router = new Router5([], options);

	router.usePlugin(historyPlugin());
	router.add(routes);

	return router;
}
