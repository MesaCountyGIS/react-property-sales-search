import 'core-js/fn/object/assign';
import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';

const store = configureStore();

render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
);
registerServiceWorker();
