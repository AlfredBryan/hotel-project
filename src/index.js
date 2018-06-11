import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './store/reducers/index';
import reduxThunk from 'redux-thunk';


const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const app = (
    <Provider store={store} >
        <App />
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
