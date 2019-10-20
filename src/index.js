import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import { createStore } from 'redux';
import AllReducers from './components/store/reducers/AllReducers';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LogIn from './pages/LogIn';
import SignIn from './pages/SignIn';
import UserMenu from './components/usersProfile/UserMenu';
import { AllProductsProvider } from './components/context/AllProductsContext';
import ShoppingCart from './pages/ShoppingCart';

const store = createStore(
    AllReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,700,700i&display=swap');
    
    body {
      background:#fff;
      font-family: 'Open Sans', sans-serif;
    }
    
    *{
      padding:0;
      margin:0;
      box-sizing: border-box;
    }
    
  `;


ReactDOM.render(
    <Router>
        <AllProductsProvider>
            <Provider store={store}>
                <GlobalStyle />
                <Switch>
                    <Route path='/' exact component={App} />
                    <Route path='/logIn' component={LogIn} />
                    <Route path='/signIn' component={SignIn} />
                    <Route path='/user/:logUser' component={UserMenu} />
                    <Route path='/cart' component={ShoppingCart} />
                </Switch>
            </Provider>
        </AllProductsProvider>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
