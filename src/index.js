import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { HashRouter } from 'react-router-dom'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

import './styles/category.scss';


import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
		<HashRouter>
      <App/>
  	</HashRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
