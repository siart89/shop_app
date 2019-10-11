import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import { createStore } from 'redux';
import AllReducers from './components/store/reducers/AllReducers';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AuthStatus } from './components/context/IsAuthContext';


const store = createStore(
  AllReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const GlobalStyle = createGlobalStyle`
    body {
      background:#fff;
    }
    
    *{
      padding:0;
      margin:0;
      box-sizing: border-box;
    }
  `


ReactDOM.render(
  <Router>
    <AuthStatus>
      <Provider store={store}>
        <GlobalStyle />
        <Route path='/'>
          <App />
        </Route>
      </Provider>
    </AuthStatus>
  </Router>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
