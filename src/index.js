import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Promise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

import PostIndex from './components/PostIndex';
import PostNew from './components/PostNew';
import reducers from './reducers/';


const createStoreWithMiddleware = applyMiddleware(Promise)(createStore);

ReactDOM.render(
  <Provider store={ createStoreWithMiddleware(reducers) }>
    <BrowserRouter>      
      <Switch>            
        <Route path='/posts/new' component={ PostNew } />
        <Route path='/' component={ PostIndex } />
      </Switch>
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root'));
registerServiceWorker();
