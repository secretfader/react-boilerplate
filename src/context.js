import React from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router5';
import App from './components/app';

export default function configureContext(store, router) {
	return (
		<Provider store={store}>
			<RouterProvider router={router}>
				<App/>
			</RouterProvider>
		</Provider>
	);
}
