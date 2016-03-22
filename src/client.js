/* global document */
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import configureStore from './store';
import App from './components/app';

const store = configureStore();
const context = (
	<Provider store={store}>
		<App/>
	</Provider>
);

render(context, document.getElementById('app'));
