import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';

class HelloWorld extends React.Component {
  render() {
    return <div>Hello World!</div>;
  }
}

class GoodBye extends React.Component {
  render() {
    return <div>Good Bye!</div>;
  }
}

ReactDOM.render(
  <BrowserRouter>
    <div>      
      <Route path='/hi' component={ HelloWorld } />
      <Route path='/bye' component={ GoodBye } />
    </div>
  </BrowserRouter>, 
  document.getElementById('root'));
registerServiceWorker();
