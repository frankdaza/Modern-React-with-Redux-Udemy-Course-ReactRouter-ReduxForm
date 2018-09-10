import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Promise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import registerServiceWorker from './registerServiceWorker';

import PostIndex from './components/PostIndex';


const createStoreWithMiddleware = applyMiddleware(Promise)(createStore);

ReactDOM.render(
  <BrowserRouter>
    <div>            
      <Route path='/' component={ PostIndex } />
    </div>
  </BrowserRouter>, 
  document.getElementById('root'));
registerServiceWorker();
