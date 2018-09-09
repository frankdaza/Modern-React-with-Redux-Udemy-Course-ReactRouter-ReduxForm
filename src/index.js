import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';

import PostIndex from './components/PostIndex';


ReactDOM.render(
  <BrowserRouter>
    <div>            
      <Route path='/' component={ PostIndex } />
    </div>
  </BrowserRouter>, 
  document.getElementById('root'));
registerServiceWorker();
