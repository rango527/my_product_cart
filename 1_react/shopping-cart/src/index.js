import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { createStore } from 'redux';
import rootReducer from './reducers';
import store from './Redux/store';

const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store = { store }>
        <App />
    </Provider>, 
    document.getElementById('root'));

serviceWorker.unregister();
